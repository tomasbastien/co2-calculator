var updates = {
      'last_release_id' : '2.6.3'
}

changelog_langEn.known_issues = 'Known issues'
changelog_langEn.considerated_features = 'Considerated features'
changelog_langEn.older_issues = 'Older_issues'
changelog_langEn.older_features = 'Older considerated features'
changelog_langFr.known_issues = 'Bugs connus'
changelog_langFr.considerated_features = 'Fonctionnalités envisagées'
changelog_langFr.older_issues = 'Anciens bugs'
changelog_langFr.older_features = 'Anciennes fonctionnalités envisagées'


changelog_langEn.last_issues_review_date='   Aug 5th, 2023'
changelog_langEn.last_features_review_date='   Aug 5th, 2023'
changelog_langEn.last_older_issues_review_date='   Aug 5th, 2023'
changelog_langEn.last_older_features_review_date='   Aug 5th, 2023'

changelog_langFr.last_issues_review_date='   05 août 2023'
changelog_langFr.last_features_review_date='   05 août 2023'
changelog_langFr.last_older_issues_review_date='   05 août 2023'
changelog_langFr.last_older_features_review_date='   05 août 2023'


co2ecalculator_langEn.title='CO2e Calculator'
co2ecalculator_langEn.transportation_title='Choose a transportation : '
co2ecalculator_langEn.transportation=''
co2ecalculator_langEn.add_trip='Add this trip'
co2ecalculator_langEn.clear='Clear'
co2ecalculator_langEn.how='How does this tool work ?'
co2ecalculator_langEn.greener='Let\'s do this greener ! (coming soon)'
co2ecalculator_langEn.departure="Departure (Locality or GPS coordinates)"
co2ecalculator_langEn.arrival='Arrival (Locality or GPS coordinates)'
co2ecalculator_langEn.staticBackdropLabel='How does this tool work ?'
co2ecalculator_langEn.close='Close'

co2ecalculator_langFr.title='Calculateur CO2e'
co2ecalculator_langFr.transportation_title='Choisir un moyen de transport : '
co2ecalculator_langFr.transportation=''
co2ecalculator_langFr.add_trip='Ajouter ce trajet'
co2ecalculator_langFr.clear='Effacer'
co2ecalculator_langFr.how='Comment fonctionne cet outil ?'
co2ecalculator_langFr.greener='Faisons cela plus écologiquement ! (A venir)'
co2ecalculator_langFr.departure="Départ (Lieu ou coordonnées GPS)"
co2ecalculator_langFr.arrival="Arrivée (Lieu ou coordonnées GPS)"
co2ecalculator_langFr.staticBackdropLabel='Comment fonctionne cet outil ?'
co2ecalculator_langFr.close='Fermer'

var co2ecalculator_tranportationsFr = {
    '2' : 'Autocar',
    '3' : 'Vélo',
    '4' : 'Bus de ville',
    '5' : 'Voiture',
    '6' : 'Voiture électrique',
    '7' : 'Avion',
    '8' : 'Train régional',
    '9' : 'Train à grande vitesse'
}

var co2ecalculator_tranportationsEn = {
    '2' : 'Autobus',
    '3' : 'Bike',
    '4' : 'City Bus',
    '5' : 'Car',
    '6' : 'Electric Car',
    '7' : 'Plane',
    '8' : 'Regular train',
    '9' : 'High-speed train',
}

var changelog_lang = changelog_langEn;
var co2ecalculator_lang = co2ecalculator_langEn;
var co2ecalculator_tranportations = co2ecalculator_tranportationsEn;

function updateVersion(){
  element=document.getElementById("last_release_id");
  element.innerText=updates.last_release_id;

}

function updateLanguage(page) {
  if (page.includes("changelog")){
    for (var propName in changelog_lang) {
      element=document.getElementById(propName)
      if (element.nodeName == 'SPAN'){
        element.innerText = changelog_lang[propName];
      }
      else{
        element.innerHTML = changelog_lang[propName];
      }
    }
  }
  if (page.includes("co2e-calculator")){
    for (var propName in co2ecalculator_lang) {
      element=document.getElementById(propName)
      if (propName == 'transportation'){
        for (let i = 1 ; i <= Object.keys(co2ecalculator_tranportationsEn).length; i++){
        const option = document.querySelector('#transportation option:nth-of-type('+(i+1)+')');
        option.textContent = co2ecalculator_tranportations[i+1];
        }
      }else{

      if (element.nodeName == 'SPAN'){
        element.innerText = co2ecalculator_lang[propName];
      }else if (element.nodeName == 'INPUT'){
        element.placeholder = co2ecalculator_lang[propName];
      }else{
        element.innerHTML = co2ecalculator_lang[propName];
      }
    }
    }
  }

}

// Set the language to English
function setLanguage(language) {
  var page = window.location.pathname.split("/").pop();
  if (language === 'en') {
    changelog_lang = changelog_langEn;
    co2ecalculator_lang = co2ecalculator_langEn;
    co2ecalculator_tranportations = co2ecalculator_tranportationsEn;
  } else if (language === 'fr') {
    changelog_lang = changelog_langFr;
    co2ecalculator_lang = co2ecalculator_langFr;
    co2ecalculator_tranportations = co2ecalculator_tranportationsFr;
  }
  updateLanguage(page);
}

// Update the text on the page with the initial language
updateVersion();
updateLanguage(window.location.pathname.split("/").pop());

