import json
import requests
from datetime import datetime

# Function to load JSON data from a file
def load_json_file(file_path):
    with open(file_path, 'r') as file:
        return json.load(file)

# Function to save JSON data to a file
def save_json_file(file_path, data):
    with open(file_path, 'w') as file:
        json.dump(data, file, indent=4)

# Function to update transportation data
def update_transportation_co2(file_path, token):
    # Load the external JSON file
    data = load_json_file(file_path)
    
    success = False
    for transport in data["transportations"]:
        try:
            # Query the API using the transportation id
            url = f"https://impactco2.fr/api/v1/transport?km=1&transports={transport['id']}"
            
            # Custom headers with Authorization Bearer token
            headers = {
                'Authorization': f'Bearer {token}'
            }
            
            # Sending the request with custom headers
            response = requests.get(url, headers=headers)

            if response.status_code == 200:
                result = response.json()

                # Check if "data" and "value" exist in the response
                if "data" in result and len(result["data"]) > 0:
                    value = result["data"][0].get("value")
                    if value is not None:
                        # Update ademe_co2e_per_km_in_g field with the "value"
                        transport['ademe_co2e_per_km_in_g'] = value * 1000  
                        success = True
                    else:
                        print(f"No 'value' found for {transport['name']} (ID: {transport['id']})")
                else:
                    print(f"Unexpected API response format for {transport['name']} (ID: {transport['id']})")
            else:
                print(f"Failed to fetch data for {transport['name']} (ID: {transport['id']}), Status Code: {response.status_code}")
        except Exception as e:
            print(f"Error occurred for {transport['name']} (ID: {transport['id']}): {e}")

    # If successful, update the last_updated field
    if success:
        data["last_updated"] = datetime.now().strftime("%d/%m/%Y %H:%M")
        print(f"Successfully updated transportation data. Last updated: {data['last_updated']}")
        
        # Save the updated JSON data back to the file
        save_json_file(file_path, data)

# File path to your external JSON file
json_file_path = 'transportations.json'

# Your Authorization Bearer token (replace with actual token)
bearer_token = '16611846-3ae2-4ef6-8727-1fdb5ded8f61'

# Call the function to update transportation CO2 data
update_transportation_co2(json_file_path, bearer_token)
