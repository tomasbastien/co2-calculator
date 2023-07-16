var updates = {
      'last_release_id' : '2.4.0'
}


var changelog_langEn = {    
    // 'changelog' : '<h5 class='mt-4'><span class='p-2 bg-light shadow rounded text-success'>Version 1.0.0</span>   28th Jan, 2023</h5><ul class='mt-3'>    <li class='ml-3'><i class='mdi mdi-circle-medium mr-2'></i><strong>Initial Released</strong></li></ul><h5 class='mt-4'> <span class='p-2 bg-light shadow rounded text-success'>Version 1.1.0</span>   03rd Fev, 2023</h5><ul class='mt-3'>    <li class='ml-3'><i class='mdi mdi-circle-medium mr-2'></i><strong>Multimodal management</strong> (plan itinerary with differents transportations) : it is now possible to chain multiple trips with different transportation</li>    <li class='ml-3'><i class='mdi mdi-circle-medium mr-2'></i>Better responsive design and text alignment</li></ul><h5 class='mt-4'> <span class='p-2 bg-light shadow rounded text-success'>Version 1.2.0</span>   04th Fev, 2023</h5><ul class='mt-3'>    <li class='ml-3'><i class='mdi mdi-circle-medium mr-2'></i><strong>Multimodal management :</strong> adding 'delete' option</li>    <li class='ml-3'><i class='mdi mdi-circle-medium mr-2'></i><strong>Easy step management :</strong> remove, invert list</li>    <li class='ml-3'><i class='mdi mdi-circle-medium mr-2'></i>Using pretty buttons for step management</li></ul><h5 class='mt-4'> <span class='p-2 bg-light shadow rounded text-success'>Version 1.2.1</span>   04th Fev, 2023</h5><ul class='mt-3'>    <li class='ml-3'><i class='mdi mdi-circle-medium mr-2'></i><strong>Bug fixes :</strong> resolving issues <strong>#1</strong> and <strong>#3</strong></li>    <li class='ml-3'><i class='mdi mdi-circle-medium mr-2'></i>Using pretty button for step deletion in result sub-part</li></ul><h5 class='mt-4'> <span class='p-2 bg-light shadow rounded text-success'>Version 2.0.0</span>   8th Mar, 2023</h5><ul class='mt-3'>    <li class='ml-3'><i class='mdi mdi-circle-medium mr-2'></i><strong>Adding plane support</strong> (distance estimated on a crowfly beetween steps)</li>    <li class='ml-3'><i class='mdi mdi-circle-medium mr-2'></i><strong>Adding regular and high-speed train support</strong> (distance estimated on a crowfly beetween steps)</li>    <!-- <li class='ml-3'><i class='mdi mdi-circle-medium mr-2'></i><strong>Adding SNCF (french rail company) routing engine</strong>, with autocalculation of journey and CO2 emissions</li> --></ul><h5 class='mt-4'> <span class='p-2 bg-light shadow rounded text-success'>Version 2.1.0</span>   21th Mar, 2023</h5><ul class='mt-3'>    <li class='ml-3'><i class='mdi mdi-circle-medium mr-2'></i><strong>Regular and high-speed train trips now use BRouter.de</strong> (really sticks to the railway, enhancing precision in distance calculation)</li>    <!-- <li class='ml-3'><i class='mdi mdi-circle-medium mr-2'></i><strong>Adding SNCF (french rail company) routing engine</strong>, with autocalculation of journey and CO2 emissions</li> --></ul><h5 class='mt-4'> <span class='p-2 bg-light shadow rounded text-success'>Version 2.2.0</span>   24th Apr, 2023</h5><ul class='mt-3'>    <li class='ml-3'><i class='mdi mdi-circle-medium mr-2'></i><strong>Allow direct use of GPS coordinates</strong> (both DD & DMS format)</li>    <li class='ml-3'><i class='mdi mdi-circle-medium mr-2'></i>Text correction</li></ul><h7 class='mt-4'> <span class='p-2 bg-light shadow rounded text-warning'>Known issues in <strong>2.2.0</strong></span> Last updated on 24th Apr, 2023</h7><ul class='mt-3'>    <li class='ml-3'><i class='mdi mdi-circle-medium mr-2'></i><strong>#2</strong> - Map is not centered on global view when chaining trips</li></ul><h7 class='mt-4'> <span class='p-2 bg-light shadow rounded text-secondary'>Considered features</span> Last updated on 24th Apr, 2023</h7><ul class='mt-3'>    <li class='ml-3'><i class='mdi mdi-circle-medium mr-2'></i>Dropdown list for Nominatim query results in order to let the user choose the desired location instead of using the only first result</li>    <li class='ml-3'><i class='mdi mdi-circle-medium mr-2'></i>Find better direction service for public transportation</li></ul><h7 class='mt-4'> <span class='p-2 bg-light shadow rounded text-secondary'>Older issues</span> Last updated on 24th Apr, 2023</h7><ul class='mt-3'>    <li class='ml-3'><i class='mdi mdi-circle-medium mr-2'></i><del><strong>#1</strong> - CO2 calculation approximation with using round kilometers, better use meters</del></li>    <li class='ml-3'><i class='mdi mdi-circle-medium mr-2'></i><del><strong>#3</strong> - After trip deletion, GPS trace remains on the map</del></li></ul>',
    'known_issues' : 'Known issues',
    'considerated_features' : 'Considerated features',
    'older_issues' : 'Older issues',
    'older_features' : 'Older considerated features',
    'v1.0.0-release-date' : '   Jan 28th, 2023',
    'v1.0.0-release-notes' : '<li class="ml-3"><i class="mdi mdi-circle-medium mr-2"></i><strong>Original release</strong></li>',
    'v1.1.0-release-date' : '   Fev 3rd, 2023',
    'v1.1.0-release-notes' : '<li class="ml-3"><i class="mdi mdi-circle-medium mr-2"></i><strong>Multimodal management</strong> (plan itinerary with differents transportations) : it is now possible to chain multiple trips with different transportation</li><li class="ml-3"><i class="mdi mdi-circle-medium mr-2"></i>Better responsive design and text alignment</li>',
    'v1.2.0-release-date' : '   Fev 4th, 2023',
    'v1.2.0-release-notes' : '<li class="ml-3"><i class="mdi mdi-circle-medium mr-2"></i><strong>Multimodal management :</strong> adding "delete" option</li><li class="ml-3"><i class="mdi mdi-circle-medium mr-2"></i><strong>Easy step management :</strong> remove, invert list</li><li class="ml-3"><i class="mdi mdi-circle-medium mr-2"></i>Using pretty buttons for step management</li>',
    'v1.2.1-release-date' : '   Fev 4th, 2023',
    'v1.2.1-release-notes' : '<li class="ml-3"><i class="mdi mdi-circle-medium mr-2"></i><strong>Bug fixes :</strong> resolving issues <strong>#1</strong> and <strong>#3</strong></li><li class="ml-3"><i class="mdi mdi-circle-medium mr-2"></i>Using pretty button for step deletion in result sub-part</li>',
    'v2.0.0-release-date' : '   Mar 8th , 2023',
    'v2.0.0-release-notes' : '<li class="ml-3"><i class="mdi mdi-circle-medium mr-2"></i><strong>Adding plane support</strong> (distance estimated on a crowfly beetween steps)</li><li class="ml-3"><i class="mdi mdi-circle-medium mr-2"></i><strong>Adding regular and high-speed train support</strong> (distance estimated on a crowfly beetween steps)</li><!-- <li class="ml-3"><i class="mdi mdi-circle-medium mr-2"></i><strong>Adding SNCF (french rail company) routing engine</strong>, with autocalculation of journey and CO2 emissions</li> -->',
    'v2.1.0-release-date' : '   Mar 21th, 2023',
    'v2.1.0-release-notes' : '<li class="ml-3"><i class="mdi mdi-circle-medium mr-2"></i><strong>Regular and high-speed train trips now use BRouter.de</strong> (really sticks to the railway, enhancing precision in distance calculation)</li>',
    'v2.2.0-release-date' : '   Apr 24th, 2023',
    'v2.2.0-release-notes' : '<li class="ml-3"><i class="mdi mdi-circle-medium mr-2"></i><strong>Allow direct use of GPS coordinates</strong> (both DD & DMS format)</li><li class="ml-3"><i class="mdi mdi-circle-medium mr-2"></i>Text correction</li>',
    'v2.2.1-release-date' : '   Apr 29th, 2023',
    'v2.2.1-release-notes' : '<li class="ml-3"><i class="mdi mdi-circle-medium mr-2"></i><strong>Adding multilanguage support</strong></li>',
    'v2.2.2-release-date' : '   May 10th, 2023',
    'v2.2.2-release-notes' : '<li class="ml-3"><i class="mdi mdi-circle-medium mr-2"></i>Adding <strong>watermark</strong> and <strong>screenshot & download button</strong> for LeafLet map</li>',
    'v2.2.3-release-date' : '   May 15th, 2023',
    'v2.2.3-release-notes' : '<li class="ml-3"><i class="mdi mdi-circle-medium mr-2"></i>Code cleaning and refactoring</li>',
    'v2.2.4-release-date' : '   May 24th, 2023',
    'v2.2.4-release-notes' : '<li class="ml-3"><i class="mdi mdi-circle-medium mr-2"></i><strong>Bug fixes :</strong> resolving issue <strong>#4</strong></li>',
    'v2.3.0-release-date' : '   Jun 4th, 2023',
    'v2.3.0-release-notes' : '<li class="ml-3"><i class="mdi mdi-circle-medium mr-2"></i><strong>Adding Openrouteservice autocomplete</strong> to allow user to choose pre-processed location based on provided text string</li>',
    'v2.3.1-release-date' : '   Jun 10th, 2023',
    'v2.3.1-release-notes' : '<li class="ml-3"><i class="mdi mdi-circle-medium mr-2"></i>Handling empty user input to prevent querying Openrouteservices in this case</li>',
    'v2.3.2-release-date' : '   Jul 3rd, 2023',
    'v2.3.2-release-notes' : '<li class="ml-3"><i class="mdi mdi-circle-medium mr-2"></i><strong>Bug fixes :</strong> resolving issue <strong>#5</strong></li><li>Adding Openrouteservice fallback for unsuccessful Nominatim queries</li>',
    'v2.4.0-release-date' : '   Jul 16th, 2023',
    'v2.4.0-release-notes' : '<li class="ml-3"><i class="mdi mdi-circle-medium mr-2"></i><strong>Bug fixes :</strong> resolving issue <strong>#2</strong></li><li><strong>Implementing feature "<i>Coloring different trips on the map</i>"</strong> and adding markers that allows to identify departure and arrival</li><li><strong>Adding full screen button</strong> on Leaflet map',
    'issue-id-1' : '<li class="ml-3"><i class="mdi mdi-circle-medium mr-2"></i><del><strong>#1</strong> - CO2e calculation approximation with using round kilometers, better use meters</del></li>',
    'issue-id-2' : '<li class="ml-3"><i class="mdi mdi-circle-medium mr-2"></i><del><strong>#2</strong> - Map is not centered on global view when chaining trips</del></li>',
    'issue-id-3' : '<li class="ml-3"><i class="mdi mdi-circle-medium mr-2"></i><del><strong>#3</strong> - After trip deletion, GPS trace remains on the map</del></li>',
    'issue-id-4' : '<li class="ml-3"><i class="mdi mdi-circle-medium mr-2"></i><del><strong>#4</strong> - Backward button still use old URL on changelog page, that causes error on watermark over Leaflet map</del></li>',
    'issue-id-5' : '<li class="ml-3"><i class="mdi mdi-circle-medium mr-2"></i><del><strong>#5</strong> - "+" operator concats strings instead of summing numbers</del></li>',
    'last_issues_review_date' : '   Jul 16th, 2023',
    'last_features_review_date' : '   Jul 16th, 2023',
    'last_older_issues_review_date' : '   Jul 16th, 2023',
    'last_older_features_review_date' : '   Jul 16th, 2023',
    'feature-id-1' : '<li class="ml-3"><i class="mdi mdi-circle-medium mr-2"></i><del>Dropdown list for Nominatim query results in order to let the user choose the desired location instead of using the only first result</del></li>',
    'feature-id-2' : 'Find better direction service for public transportation',
    'feature-id-3' : 'Evaluate network payload performances to decide if hosting external ressources could be relevant',
    'feature-id-4' : '<li class="ml-3"><i class="mdi mdi-circle-medium mr-2"></i><del>Coloring different trips on the map</del></li>',
    'feature-id-5' : 'Look for filtered list of POIs when using public transportations or train to ensure that steps are stop stations'
}

var changelog_langFr = {    
    // 'changelog' : '<h5 class='mt-4'><span class='p-2 bg-light shadow rounded text-success'>Version 1.0.0</span>   28 janvier 2023</h5><ul class='mt-3'>    <li class='ml-3'><i class='mdi mdi-circle-medium mr-2'></i><strong>Première version et publication</strong></li></ul><h5 class='mt-4'> <span class='p-2 bg-light shadow rounded text-success'>Version 1.1.0</span>   03 février 2023</h5><ul class='mt-3'>    <li class='ml-3'><i class='mdi mdi-circle-medium mr-2'></i><strong>Gestion multimodale</strong> (créer des itinéraires avec plusieurs moyens de transports) : il est maintenant possible d\'enchainer plusieurs voyages avec des modes de transports différents</li>    <li class='ml-3'><i class='mdi mdi-circle-medium mr-2'></i>Amélioration du design et de l\'alignement des textes</li></ul><h5 class='mt-4'> <span class='p-2 bg-light shadow rounded text-success'>Version 1.2.0</span>   04 février 2023</h5><ul class='mt-3'>    <li class='ml-3'><i class='mdi mdi-circle-medium mr-2'></i><strong>Gestion multimodale :</strong> ajout de l\'option 'Supprimer'</li>    <li class='ml-3'><i class='mdi mdi-circle-medium mr-2'></i><strong>Gestion des étapes facilitée :</strong> suppression, inversion de la liste</li>    <li class='ml-3'><i class='mdi mdi-circle-medium mr-2'></i>Ajout de boutons pour la gestion des étapes</li></ul><h5 class='mt-4'> <span class='p-2 bg-light shadow rounded text-success'>Version 1.2.1</span>   04 février 2023</h5><ul class='mt-3'>    <li class='ml-3'><i class='mdi mdi-circle-medium mr-2'></i><strong>Correction de bugs :</strong> correction des bugs <strong>#1</strong> et <strong>#3</strong></li>    <li class='ml-3'><i class='mdi mdi-circle-medium mr-2'></i>Ajout d\'un bouton pour la suppression d\'étape dans le panneau des résultats</li></ul><h5 class='mt-4'> <span class='p-2 bg-light shadow rounded text-success'>Version 2.0.0</span>   08 mars 2023</h5><ul class='mt-3'>    <li class='ml-3'><i class='mdi mdi-circle-medium mr-2'></i><strong>Ajout de l\'avion</strong> (distance estimée avec des trajets à vol d\'oiseau)</li>    <li class='ml-3'><i class='mdi mdi-circle-medium mr-2'></i><strong>Ajout du train régional et du train à grand vitesse</strong> (distance estimée avec des trajets à vol d\'oiseau)</li>    <!-- <li class='ml-3'><i class='mdi mdi-circle-medium mr-2'></i><strong>Ajout du moteur de trajet SNCF</strong>, avec calcul automatique du trajet et des émissions CO2</li> --></ul><h5 class='mt-4'> <span class='p-2 bg-light shadow rounded text-success'>Version 2.1.0</span>   21 mars 2023</h5><ul class='mt-3'>    <li class='ml-3'><i class='mdi mdi-circle-medium mr-2'></i><strong>Les trajets en trains régionaux et à grande vitesse utilisent maintenant le moteur de Brouter.de</strong> (suit plus fidèlement les voies de chemins de fer, améliorant la précision sur la distance calculée)</li>    <!-- <li class='ml-3'><i class='mdi mdi-circle-medium mr-2'></i><strong>Adding SNCF (french rail company) routing engine</strong>, with autocalculation of journey and CO2 emissions</li> --></ul><h5 class='mt-4'> <span class='p-2 bg-light shadow rounded text-success'>Version 2.2.0</span>   24 avril 2023</h5><ul class='mt-3'>    <li class='ml-3'><i class='mdi mdi-circle-medium mr-2'></i><strong>Interprétation de coordonnées GPS dans les champs Départ, Arrivée et étapes </strong> (au format DD ou DMS)</li>    <li class='ml-3'><i class='mdi mdi-circle-medium mr-2'></i>Correction de textes</li></ul><h7 class='mt-4'> <span class='p-2 bg-light shadow rounded text-warning'>Bugs connus en <strong>2.2.0</strong></span> Dernière mise à jour le 24 avril 2023</h7><ul class='mt-3'>    <li class='ml-3'><i class='mdi mdi-circle-medium mr-2'></i><strong>#2</strong> - La carte n\'est pas centrée sur l\'ensemble lorsque qu\'on enchaine plusieurs trajets</li></ul><h7 class='mt-4'> <span class='p-2 bg-light shadow rounded text-secondary'>Fonctionnalités envisagées</span> Dernière mise à jour le 24 avril 2023</h7><ul class='mt-3'>    <li class='ml-3'><i class='mdi mdi-circle-medium mr-2'></i>Liste déroulante pour les résultats de la requête Nominatim pour laisser l\'utilisateur choisir la localisation voulue plutôt qu\'utiliser le tout premier résultat</li>    <li class='ml-3'><i class='mdi mdi-circle-medium mr-2'></i>Trouver un meilleur moteur de trajets pour les transports publics</li></ul><h7 class='mt-4'> <span class='p-2 bg-light shadow rounded text-secondary'>Bugs antérieurs et corrigés</span> Dernière mise à jour le 24 avril 2023</h7><ul class='mt-3'>    <li class='ml-3'><i class='mdi mdi-circle-medium mr-2'></i><del><strong>#1</strong> - Calcul CO2 approximatif en utilisant un compte de kilomètres arrondi, il faudrait mieux utiliser un total en mètres</del></li>    <li class='ml-3'><i class='mdi mdi-circle-medium mr-2'></i><del><strong>#3</strong> - Après suppression d\'un voyage, la trace GPS reste sur la carte</del></li></ul>',
    'known_issues' : 'Bugs connus',
    'considerated_features' : 'Fonctionnalités envisagées',
    'older_issues' : 'Anciens bugs',
    'older_features' : 'Anciennes fonctionnalités envisagées',
    'v1.0.0-release-date' : '   28 janvier 2023',
    'v1.0.0-release-notes' : '<li class="ml-3"><i class="mdi mdi-circle-medium mr-2"></i><strong>Première version et publication</strong></li>',
    'v1.1.0-release-date' : '   03 février 2023',
    'v1.1.0-release-notes' : '<li class="ml-3"><i class="mdi mdi-circle-medium mr-2"></i><strong>Gestion multimodale</strong> (créer des itinéraires avec plusieurs moyens de transports) : il est maintenant possible d\'enchainer plusieurs voyages avec des modes de transports différents</li><li class="ml-3"><i class="mdi mdi-circle-medium mr-2"></i>Amélioration du design et de l\'alignement des textes</li>',
    'v1.2.0-release-date' : '   04 février 2023',
    'v1.2.0-release-notes' : '<li class="ml-3"><i class="mdi mdi-circle-medium mr-2"></i><strong>Gestion multimodale :</strong> ajout de l\'option \"Supprimer\"</li>    <li class="ml-3"><i class="mdi mdi-circle-medium mr-2"></i><strong>Gestion des étapes facilitée :</strong> suppression, inversion de la liste</li>    <li class="ml-3"><i class="mdi mdi-circle-medium mr-2"></i>Ajout de boutons pour la gestion des étapes</li>',
    'v1.2.1-release-date' : '   04 février 2023',
    'v1.2.1-release-notes' : '<li class="ml-3"><i class="mdi mdi-circle-medium mr-2"></i><strong>Correction de bugs :</strong> correction des bugs <strong>#1</strong> et <strong>#3</strong></li>    <li class="ml-3"><i class="mdi mdi-circle-medium mr-2"></i>Ajout d\'un bouton pour la suppression d\'étape dans le panneau des résultats</li>',
    'v2.0.0-release-date' : '   08 mars 2023',
    'v2.0.0-release-notes' : '<li class="ml-3"><i class="mdi mdi-circle-medium mr-2"></i><strong>Ajout de l\'avion</strong> (distance estimée avec des trajets à vol d\'oiseau)</li>    <li class="ml-3"><i class="mdi mdi-circle-medium mr-2"></i><strong>Ajout du train régional et du train à grand vitesse</strong> (distance estimée avec des trajets à vol d\'oiseau)</li>    <!-- <li class="ml-3"><i class="mdi mdi-circle-medium mr-2"></i><strong>Ajout du moteur de trajet SNCF</strong>, avec calcul automatique du trajet et des émissions CO2</li> -->',
    'v2.1.0-release-date' : '   21 mars 2023',
    'v2.1.0-release-notes' : '<li class="ml-3"><i class="mdi mdi-circle-medium mr-2"></i><strong>Les trajets en trains régionaux et à grande vitesse utilisent maintenant le moteur de Brouter.de</strong> (suit plus fidèlement les voies de chemins de fer, améliorant la précision sur la distance calculée)</li>',
    'v2.2.0-release-date' : '   24 avril 2023',
    'v2.2.0-release-notes' : '<li class="ml-3"><i class="mdi mdi-circle-medium mr-2"></i><strong>Interprétation de coordonnées GPS dans les champs Départ, Arrivée et étapes </strong> (au format DD ou DMS)</li>    <li class="ml-3"><i class="mdi mdi-circle-medium mr-2"></i>Correction de textes</li>',
    'v2.2.1-release-date' : '   29 avril 2023',
    'v2.2.1-release-notes' : '<li class="ml-3"><i class="mdi mdi-circle-medium mr-2"></i><strong>Ajout du multi-langues</strong></li>',
    'v2.2.2-release-date' : '   10 mai 2023',
    'v2.2.2-release-notes' : '<li class="ml-3"><i class="mdi mdi-circle-medium mr-2"></i>Ajout du <strong>filigrane</strong> et du <strong>bouton d\'export</strong> en image de la carte LeafLet</strong></li></del></li>',
    'v2.2.3-release-date' : '   15 mai 2023',
    'v2.2.3-release-notes' : '<li class="ml-3"><i class="mdi mdi-circle-medium mr-2"></i>Ménage et réorganisation du code</li>',
    'v2.2.4-release-date' : '   24 mai 2023',
    'v2.2.4-release-notes' : '<li class="ml-3"><i class="mdi mdi-circle-medium mr-2"></i><strong>Correction de bugs :</strong> correction du bug <strong>#4</strong></li>',
    'v2.3.0-release-date' : '   4 juin 2023',
    'v2.3.0-release-notes' : '<li class="ml-3"><i class="mdi mdi-circle-medium mr-2"></i><strong>Ajout de l\'autocomplétion avec Openrouteservice </strong>pour permettre à l\'utilisateur de choisir une localisation pré-déterminée à partir du texte saisi</li>',
    'v2.3.1-release-date' : '   10 juin 2023',
    'v2.3.1-release-notes' : '<li class="ml-3"><i class="mdi mdi-circle-medium mr-2"></i>Gestion du cas où le champ Lieu est nul pour ne pas interroger Openrouteservice dans ce cas</li>',
    'v2.3.2-release-date' : '   03 juillet 2023',
    'v2.3.2-release-notes' : '<li class="ml-3"><i class="mdi mdi-circle-medium mr-2"></i><strong>Correction de bugs :</strong> correction du bug <strong>#5</strong></li><li>Ajout d\'une requête vers Openrouteservice si celle vers Nominatim échoue</li>',
    'v2.4.0-release-date' : '   16 juillet 2023',
    'v2.4.0-release-notes' : '<li class="ml-3"><i class="mdi mdi-circle-medium mr-2"></i><strong>Correction de bugs :</strong> correction du bug <strong>#2</strong></li><li><strong>Ajout de la fonctionnalité "<i>Colorer les différents trajets sur la carte</i>"</strong> avec ajout de marqueur permettant d\'identifer les points de départ et d\'arrivée</li><li><strong>Ajout du bouton "Plein écran"</strong> sur la carte Leaflet</li>',
    'issue-id-1' : '<li class="ml-3"><i class="mdi mdi-circle-medium mr-2"></i><del><strong>#1</strong> - Le calcul CO2e est approximatif avec l\'utilisation d\'un arrondi au kilomètre près, il faudrait mieux utiliser un compte en mètres',
    'issue-id-2' : '<li class="ml-3"><i class="mdi mdi-circle-medium mr-2"></i><del><strong>#2</strong> - La carte n\'est pas centrée sur l\'itinéraire global lorsque plusieurs trajets s\'enchainent.</del></li>',
    'issue-id-3' : '<li class="ml-3"><i class="mdi mdi-circle-medium mr-2"></i><del><strong>#3</strong> - Après la suppression d\'un trajet, la trace GPS du trajet reste sur la carte</del></li>',
    'issue-id-4' : '<li class="ml-3"><i class="mdi mdi-circle-medium mr-2"></i><del><strong>#4</strong> - Le bouton "Retour" utilise toujours l\'ancienne URL sur la page de changelog, ce qui entraine une erreur sur le filigrane apposé sur la carte Leaflet</del></li>',
    'issue-id-5' : '<li class="ml-3"><i class="mdi mdi-circle-medium mr-2"></i><del><strong>#5</strong> - L\'opérateur "+" concataine les chaines des caractères au lieu d\'additionner les nombres</del></li>',
    'last_issues_review_date' : '   16 juillet 2023',
    'last_features_review_date' : '   16 juillet 2023',
    'last_older_issues_review_date' : '   16 juillet 2023',
    'last_older_features_review_date' : '   16 juillet 2023',
    'feature-id-1' : '<li class="ml-3"><i class="mdi mdi-circle-medium mr-2"></i><del>Ajouter une pré-liste de résultats pour la requête Nominatim pour permettre à l\'utilisateur de choisir la localisation souhaitée au lieu du premier résultat.</li>',
    'feature-id-2' : 'Trouver un meilleur moteur de trajets pour les transports publics',
    'feature-id-3' : 'Evaluer les performances de chargement de l\'outil pour décider si héberger les ressources externes peut être pertinent',
    'feature-id-4' : '<li class="ml-3"><i class="mdi mdi-circle-medium mr-2"></i><del>Colorer les différents trajets sur la carte</del></li>',
    'feature-id-5' : 'Effectuer une recherche filtrée des points d\'intérêt lors de l\'usage des transports en commun pour être sûr que les lieux soit des arrêts'
}

var co2ecalculator_langEn = { 
  'title' : 'CO2e Calculator',
  'transportation-title' : 'Choose a transportation : ',
  'transportation' : '',
  'add-trip' : 'Add this trip',
  'clear' : 'Clear',
  'how' : 'How does this tool work ?',
  'departure' : "Departure (Locality or GPS coordinates)",
  'arrival' : 'Arrival (Locality or GPS coordinates)',
  'how-does-this-tool-work' : 'Based on provided geolocations, here\'s the operation mode to provide an <u>estimated</u> CO2e emission for the specified trip :<ul class=""> </br>   <li>Each location string (than can be picked in an autocomplete dropdown list provided throught <strong>Openrouteservice</strong> Autocomplete API) is sent to <strong><a target="_blank" href="https://nominatim.openstreetmap.org/">Nominatim Openstreetmap</a></strong> to query the OSM database for [lat,lon] GPS coordinates then stored in a list.</li> <ul>        <li><em>If GPS coordinates are directly provided (whether DD : ex: 45.8994, 6.1269 or DMS format : ex: 45°53\'57.8"N 6°07\'36.8"E), the tools skips the location query on Nominatim.</em></li> </ul>   </br>   <li>This [lat,lon] GPS coordinates list is sent over a different routing API based on chosen transportation mode :  </li>   <ul>    <li><strong><a target="_blank" href="https://openrouteservice.org/">OpenRouteService</a> directions API</strong> for any "road" mode    , in order to plan a trip throught all these locations and obtain kilometers journey length and route as a GPS points array.</br><em>Openrouteservice directions API only supports transportation profiles driving-car and regular-bike, so public transportations may required to specify steps to match with the local public transportation plan. This could be also be a future enhancement.</em></li>  <li><strong>A simple crowfly</strong> math calculation for plane, this needs to declare as many steps as possible</li>  <li><strong><a target="_blank" href="https://brouter.de/">BRouter.de</a></strong> for trains journey, that sticks as much as possible to railway path and need to have departure and arrival on an existant train station</li>      </ul>   </br>   <li>Total kilometers is sent to <strong><a  target="_blank"href="https://impactco2.fr/transport">Mon Impact Transport API</a></strong> (provided by ADEME, FR gov. ecologic transition agency), with chosen transportation mode. It returns kgco2e emissions, then divided by carpoolers if specified.</li>  <ul>        <li><em>Default passengers number is 1 for any other transportation than car and electric car, as estimation returned from ADEME for buses assumes an average transportation occupancy.</em></li>    </ul>   </br>   <li>GPS points array is shown as a line over a <strong><a target="_blank" href="https://leafletjs.com/">Leaflet</a></strong> Map, centered to fit global itinerary within the tile. This is usefull to see if the tool actually match with expected or realized journey.</li></ul><div class="alert alert-dark" role="alert">  No data is stored on the server, all computation is done client-side by the  web-browser. All is HTML5/Javascript written and prettified with Bootstrap 5 CSS library. Some functions (GPS coord. validation) have been AI-written using <strong><a target="_blank" href="https://chat.openai.com/">ChatGPT</a></strong> prompts.</div>All recensed bugs and futur features can be find on <a href="./changelog.html" class="link-dark">changelog page</a>.',
 'staticBackdropLabel' : 'How does this tool work ?',
 'close' : 'Close'
}

var co2ecalculator_langFr = { 
  'title' : 'Calculateur CO2e',
  'transportation-title' : 'Choisir un moyen de transport : ',
  'transportation' : '',
  'add-trip' : 'Ajouter ce trajet',
  'clear' : 'Effacer',
  'how' : 'Comment fonctionne cet outil ?',
  'departure' : "Départ (Lieu ou coordonnées GPS)",
  'arrival' : "Arrivée (Lieu ou coordonnées GPS)",
  'how-does-this-tool-work' : 'En fonction des géolocalisations fournies, voici le mode opératoire pour fournir une estimation de l\'émission de CO2e pour le trajet spécifié :<ul class=""></br><li>Chaque chaîne de localisation (qui peut être choisie dans la liste déroulante d\'autocomplétion fournie par l\'API <strong>Openrouteservice</strong> Autocomplete) est envoyée à <strong><a target="_blank" href="https://nominatim.openstreetmap.org/">Nominatim Openstreetmap</a></strong> pour interroger la base de données OSM afin d\'obtenir les coordonnées GPS [lat,lon] alors stockées dans une liste.</li><ul><li><em>Si les coordonnées GPS sont directement fournies (que ce soit au format DD : ex: 45,8994, 6,1269 ou DMS : ex: 45°53\'57.8"N 6°07\'36.8"E), l\'outil ne lance pas la requête vers Nominatim.</em></li></ul></br><li>Cette liste de coordonnées GPS [lat,lon] est envoyée sur une API de routage différente en fonction du mode de transport choisi :</li><ul><li><strong><a target="_blank" href="https://openrouteservice.org/">OpenRouteService</a> directions API</strong> pour tout mode de transports sur route, afin de planifier un voyage à travers toutes ces localisations et d\'obtenir la longueur du trajet en kilomètres et l\'itinéraire sous forme d\'un tableau de points GPS.</br><em>L\'API d\'Openrouteservice ne prend en charge que les profils de transport "voiture" et "vélo classique", les transports en commun peuvent donc nécessiter de spécifier des étapes pour correspondre au tracé de transport en commun. Cela pourrait également être une amélioration dans le futur.</em></li><li><strong>Un simple calcul mathématique à vol d\'oiseau</strong> pour les avions, nécessitant de fournir autant d\'étapes que possible.</li><li><strong><a target="_blank" href="https://brouter.de/">BRouter.de</a></strong> pour les trajets en train, qui suit autant que possible les chemins de fer et doit avoir un départ et une arrivée dans une gare existante.</li></ul></br><li>Le nombre total de kilomètres est envoyé à <strong><a  target="_blank"href="https://impactco2.fr/transport">Mon Impact Transport API</a></strong> (fourni par l\'ADEME, l\'agence de transition écologique du gouvernement français), avec le mode de transport choisi. Cette dernière renvoie les émissions de CO2 (en kgco2e), puis les divise par le nombre de passagers si spécifié.</li><ul><li><em>Le nombre de passagers par défaut est "1" pour tout transport autre que "voiture" et "voiture électrique", car l\'estimation retournée par ADEME pour les autres profils suppose une occupation moyenne des transports.</em></li></ul></br><li>Le tableau de points GPS est affiché sous forme de ligne sur une carte <strong><a target="_blank" href="https://leafletjs.com/">Leaflet</a></strong>, centrée pour s\'adapter à l\'itinéraire global dans la fenêtre. Cela est utile pour voir si le résultat de l\'outil correspond effectivement au voyage prévu ou réalisé.</li></ul><div class="alert alert-dark" role="alert">    Aucune donnée n\'est stockée sur le serveur, tous les calculs sont effectués côté client par le navigateur Web. Tout est écrit en HTML5/Javascript et est embelli avec la bibliothèque CSS Bootstrap 5. Certaines fonctions (validation des coordonnées GPS) ont été écrites par intelligence artificielle en utilisant des prompts <strong><a target="_blank" href="https://chat.openai.com/">ChatGPT</a></strong>.</div>Tous les bugs recensés et les fonctionnalités futures peuvent être trouvés sur <a href="./changelog.html" class="link-dark">la page de changelog</a></div>',
 'staticBackdropLabel' : 'Comment fonctionne cet outil ?',
 'close' : 'Fermer'
}

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

