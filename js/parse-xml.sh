read_dom () {
    local IFS=\>
    read -rd \< ENTITY CONTENT
    local ret=$?
    TAG_NAME=${ENTITY%% *}
    ATTRIBUTES=${ENTITY#* }
    return $ret
}

bbcode_to_html() {
    CONTENT=$(echo $CONTENT | sed 's/\[\/br\]/<\/br>/g')
    CONTENT=$(echo $CONTENT | sed 's/\[b\]/<strong>/g')
    CONTENT=$(echo $CONTENT | sed 's/\[\/b\]/<\/strong>/g')
    CONTENT=$(echo $CONTENT | sed 's/\[i\]/<i>/g')
    CONTENT=$(echo $CONTENT | sed 's/\[\/i\]/<\/i>/g')
    CONTENT=$(echo $CONTENT | sed 's/\[u\]/<u>/g')
    CONTENT=$(echo $CONTENT | sed 's/\[\/u\]/<\/u>/g')
    CONTENT=$(echo $CONTENT | sed 's/\[li\]/<li>/g')
    CONTENT=$(echo $CONTENT | sed 's/\[\/li\]/<\/li>/g')
    CONTENT=$(echo $CONTENT | sed 's/\[s\]/<del>/g')
    CONTENT=$(echo $CONTENT | sed 's/\[\/s\]/<\/del>/g')
    CONTENT=$(echo $CONTENT | sed 's/\[ul\]/<ul>/g')
    CONTENT=$(echo $CONTENT | sed 's/\[\/ul\]/<\/ul>/g')
    CONTENT=$(echo $CONTENT | sed 's/\[url=/<a href=/g')
    CONTENT=$(echo $CONTENT | sed 's/\[\/url\]/<\/a>/g')
    CONTENT=$(echo $CONTENT | sed 's/target\=\"\_blank\"\]/target\=\"\_blank\"\>/g')
    CONTENT=$(echo $CONTENT | sed 's/\[div/<div/g')
    CONTENT=$(echo $CONTENT | sed 's/\[\/div\]/<\/div>/g')
    #CONTENT=$(echo $CONTENT | sed 's/\]/>/g')
    target="_blank"]

    echo $CONTENT
}


parse_dom () {
    if [[ $TAG_NAME = "issue" ]] ; then
        js_var_attribute=""
        eval local $ATTRIBUTES
        #echo "issue id is: $id"
        #echo "issue status is: $status"
        js_var_attribute+="issue-id-"
        js_var_attribute+=$id
    fi
    if [[ $TAG_NAME = "feature" ]] ; then
        js_var_attribute=""
        eval local $ATTRIBUTES
        #echo "feature id is: $id"
        #echo "feature status is: $status"
        js_var_attribute+="feature-id-"
        js_var_attribute+=$id
    fi
    if [[ $TAG_NAME = "description" ]] ; then
        eval local $ATTRIBUTES
        #echo "lang is: $lang"
        #echo "content is: $CONTENT"
        CONTENT=$(bbcode_to_html CONTENT)
        if [[ $lang = "EN" ]] ; then
            echo "'$js_var_attribute' : '$CONTENT'," >> en.js
        fi
        if [[ $lang = "FR" ]] ; then
            echo "'$js_var_attribute' : '$CONTENT'," >> fr.js
        fi
    fi
    if [[ $TAG_NAME = "version" ]] ; then
        js_var_attribute=""
        eval local $ATTRIBUTES
        #echo "version number is: $number"
        js_var_attribute+="v"
        js_var_attribute+=$number
    fi
    if [[ $TAG_NAME = "release_date" ]] ; then
        eval local $ATTRIBUTES
        #echo "lang is: $lang"
        #echo "release_date is: $CONTENT"
        if [[ $lang = "EN" ]] ; then
            echo "'$js_var_attribute-release_date' : '$CONTENT'," >> en.js
        fi
        if [[ $lang = "FR" ]] ; then
            echo "'$js_var_attribute-release_date' : '$CONTENT'," >> fr.js
        fi
    fi
    if [[ $TAG_NAME = "release_notes" ]] ; then
        eval local $ATTRIBUTES
        #echo "lang is: $lang"
        #echo "release_notes is: $CONTENT"
        CONTENT=$(bbcode_to_html CONTENT)
        if [[ $lang = "EN" ]] ; then
            echo "'$js_var_attribute-release_notes' : '$CONTENT'," >> en.js
        fi
        if [[ $lang = "FR" ]] ; then
            echo "'$js_var_attribute-release_notes' : '$CONTENT'," >> fr.js
        fi
    fi
    if [[ $TAG_NAME = "manual" ]] ; then
        js_var_attribute=""
        #echo "version number is: $number"
        js_var_attribute+="manual"
    fi
    if [[ $TAG_NAME = "text" ]] ; then
        eval local $ATTRIBUTES
        #echo "manual $lang text is: $CONTENT"
        CONTENT=$(bbcode_to_html CONTENT)
        if [[ $lang = "EN" ]] ; then
            echo "'$js_var_attribute' : '$CONTENT'," >> en.js
        fi
        if [[ $lang = "FR" ]] ; then
            echo "'$js_var_attribute' : '$CONTENT'," >> fr.js
        fi
    fi
    #echo $js_var_attribute
}


cat issues.xml features.xml versions.xml  > combined_file

js_var_attribute=""
echo "var changelog_langEn = {" > en.js
echo "var changelog_langFr = {" > fr.js

while read_dom; do
    parse_dom
done <<< $(cat combined_file)

echo "}" >> en.js
echo "}" >> fr.js

echo "var co2ecalculator_langEn = {" >> en.js
echo "var co2ecalculator_langFr = {" >> fr.js

while read_dom; do
    parse_dom
done <<< $(cat manual.xml)

echo "}" >> en.js
echo "}" >> fr.js
