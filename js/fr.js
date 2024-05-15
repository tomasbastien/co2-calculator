var changelog_langFr = {
'issue-id-1' : '<li><del>#1 - Le calcul CO2e est approximatif avec l\'utilisation d\'un arrondi au kilomètre près, il faudrait mieux utiliser un compte en mètres.</del></li>',
'issue-id-2' : '<li><del>#2 - La carte n\'est pas centrée sur l\'itinéraire global lorsque plusieurs trajets s\'enchainent.</del></li>',
'issue-id-3' : '<li><del>#3 - Après la suppression d\'un trajet, la trace GPS du trajet reste sur la carte.</del></li>',
'issue-id-4' : '<li><del>#4 - Le bouton "Retour" utilise toujours l\'ancienne URL sur la page de changelog, ce qui entraine une erreur sur le filigrane apposé sur la carte Leaflet.</del></li>',
'issue-id-5' : '<li><del>#5 - L\'opérateur "+" concataine les chaines des caractères au lieu d\'additionner les nombres.</del></li>',
'issue-id-6' : '<li><del>#6 - Les marqueurs ne sont pas visibles lorsqu\'on utilise le train.</del></li>',
'feature-id-1' : '<li><del>Ajouter une pré-liste de résultats pour la requête Nominatim pour permettre à l\'utilisateur de choisir la localisation souhaitée au lieu du premier résultat.</del></li>',
'feature-id-2' : '<li><i>Trouver un meilleur moteur de trajets pour les transports publics.</i></li>',
'feature-id-3' : '<li><i>Evaluer les performances de chargement de l\'outil pour décider si héberger les ressources externes peut être pertinent.</i></li>',
'feature-id-4' : '<li><del>Colorer les différents trajets sur la carte.</del></li>',
'feature-id-5' : '<li><i>Effectuer une recherche filtrée des points d\'intérêt lors de l\'usage des transports en commun pour être sûr que les lieux soit des arrêts.</i></li>',
'v1.0.0-release_date' : '28 janvier 2023',
'v1.0.0-release_notes' : '<li><strong>Première version et publication</strong></li>',
'v1.1.0-release_date' : '03 février 2023',
'v1.1.0-release_notes' : '<li><strong>Gestion multimodale</strong> (créer des itinéraires avec plusieurs moyens de transports) : il est maintenant possible d\'enchainer plusieurs voyages avec des modes de transports différents <li>Amélioration du design et de l\'alignement des textes</li>',
'v1.2.0-release_date' : '04 février 2023',
'v1.2.0-release_notes' : '<li><strong>Gestion multimodale :</strong> ajout de l\'option "Supprimer"</li> <li><strong>Gestion des étapes facilitée :</strong> suppression, inversion de la liste</li> <li>Ajout de boutons pour la gestion des étapes</li>',
'v1.2.1-release_date' : '04 février 2023',
'v1.2.1-release_notes' : '<li><strong>Correction de bugs :</strong> correction des bugs <strong>#1</strong> et <strong>#3</strong></li> <li>Ajout d\'un bouton pour la suppression d\'étape dans le panneau des résultats</li>',
'v2.0.0-release_date' : '08 mars 2023',
'v2.0.0-release_notes' : '<li><strong>Ajout de l\'avion</strong> (distance estimée avec des trajets à vol d\'oiseau)</li> <li><strong>Ajout du train régional et du train à grand vitesse</strong> (distance estimée avec des trajets à vol d\'oiseau)</li>',
'v2.1.0-release_date' : '21 mars 2023',
'v2.1.0-release_notes' : '<li><strong>Les trajets en trains régionaux et à grande vitesse utilisent maintenant le moteur de Brouter.de</strong> (suit plus fidèlement les voies de chemins de fer, améliorant la précision sur la distance calculée)</li>',
'v2.2.0-release_date' : '24 avril 2023',
'v2.2.0-release_notes' : '<li><strong>Interprétation de coordonnées GPS dans les champs Départ, Arrivée et étapes </strong> (au format DD ou DMS)</li> <li>Correction de textes</li>',
'v2.2.1-release_date' : '29 avril 2023',
'v2.2.1-release_notes' : '<li><strong>Ajout du multi-langues</strong>',
'v2.2.2-release_date' : '10 mai 2023',
'v2.2.2-release_notes' : '<li>Ajout du <strong>filigrane</strong> et du <strong>bouton d\'export</strong> en image de la carte LeafLet</strong></li>',
'v2.2.3-release_date' : '15 mai 2023',
'v2.2.3-release_notes' : '<li>Ménage et réorganisation du code</li>',
'v2.2.4-release_date' : '24 mai 2023',
'v2.2.4-release_notes' : '<li><strong>Correction de bugs :</strong> correction du bug <strong>#4</strong></li>',
'v2.3.0-release_date' : '04 juin 2023',
'v2.3.0-release_notes' : '<li><strong>Ajout de l\'autocomplétion avec Openrouteservice </strong>pour permettre à l\'utilisateur de choisir une localisation pré-déterminée à partir du texte saisi</li>',
'v2.3.1-release_date' : '10 juin 2023',
'v2.3.1-release_notes' : '<li>Gestion du cas où le champ Lieu est nul pour ne pas interroger Openrouteservice dans ce cas</li>',
'v2.3.2-release_date' : '03 juillet 2023',
'v2.3.2-release_notes' : '<li><strong>Correction de bugs :</strong> correction du bug <strong>#5</strong></li> <li>Ajout d\'une requête vers Openrouteservice si celle vers Nominatim échoue</li>',
'v2.4.0-release_date' : '16 juillet 2023',
'v2.4.0-release_notes' : '<li><strong>Correction de bugs :</strong> correction du bug <strong>#2</strong></li> <li><strong>Ajout de la fonctionnalité "<i>Colorer les différents trajets sur la carte</i>"</strong> avec ajout de marqueur permettant d\'identifer les points de départ et d\'arrivée</li> <li><strong>Ajout du bouton "Plein écran"</strong> sur la carte Leaflet</li>',
'v2.5.0-release_date' : '01 août 2023',
'v2.5.0-release_notes' : '<li><strong>Ajout d\'une recherche de points d\'intérêt</strong> dans un rayon de 2km pour choisir la gare de train la plus proche du lieu saisi. Fait avec l\'API <strong>Overpass</strong>.</li> <li><strong>Correction de bugs :</strong> correction du bug <strong>#6</strong></li>',
'v2.6.0-release_date' : '05 août 2023',
'v2.6.0-release_notes' : '<li>Amélioration de la <strong>recherche de points d\'intérêt</strong> pour trouver la gare (dans un rayon jusqu\'à 10km) et l\'aéroport le plus proche (dans un rayon jusqu\'à 100km) du lieu saisi lors de l\'utilisation du train ou de l\'avion, toujours avec l\'API <strong>Overpass</strong>.</li>',
'v2.6.1-release_date' : '19 septembre 2023',
'v2.6.1-release_notes' : '<li><strong>Amélioration de la personnalisation</strong> des instances (centre de carte, couleurs).</li> <li><strong>Pré-ajout du bouton de solutions de mobilités alternatives</strong> (partagées, douces).</li>',
'v2.6.2-release_date' : '4 novembre 2023',
'v2.6.2-release_notes' : '<li><strong>Ajout du bouton Copie</strong> pour le résultat total.</li>',
'v2.6.3-release_date' : '15 mai 2024',
'v2.6.3-release_notes' : '<li><strong>Mise à jour de l\'API Impact CO2</strong> de l\'ADEME.</li>',
}
var co2ecalculator_langFr = {
'manual' : 'En fonction des géolocalisations fournies, voici le mode opératoire pour fournir une estimation de l\'émission de CO2e pour le trajet spécifié : <ul> </br> <li> Chaque chaîne de localisation (qui peut être choisie dans la liste déroulante d\'autocomplétion fournie par l\'API <strong>Openrouteservice</strong> Autocomplete) est envoyée à <strong><a href="https://nominatim.openstreetmap.org/" target="_blank">Nominatim Openstreetmap</a></strong> pour interroger la base de données OSM afin d\'obtenir les coordonnées GPS [lat,lon] alors stockées dans une liste. </li> <ul> <li> <i>Si les coordonnées GPS sont directement fournies (que ce soit au format DD : ex: 45,8994, 6,1269 ou DMS : ex: 45°53\'57.8"N 6°07\'36.8"E), l\'outil ne lance pas la requête vers Nominatim.</i> </li> </ul> </br> <li> Cette liste de coordonnées GPS [lat,lon] est envoyée sur une API de routage différente en fonction du mode de transport choisi : </li> <ul> <li> <strong><a href="https://openrouteservice.org/" target="_blank">OpenRouteService</a> directions API</strong> pour tout mode de transports sur route, afin de planifier un voyage à travers toutes ces localisations et d\'obtenir la longueur du trajet en kilomètres et l\'itinéraire sous forme d\'un tableau de points GPS. </br> <i>L\'API d\'Openrouteservice ne prend en charge que les profils de transport "voiture" et "vélo classique", les transports en commun peuvent donc nécessiter de spécifier des étapes pour correspondre au tracé de transport en commun. Cela pourrait également être une amélioration dans le futur.</i> </li> <li> <strong>Un simple calcul mathématique à vol d\'oiseau</strong> pour les avions, nécessitant de fournir autant d\'étapes que possible. L\'outil sélectionne l\'aéroport le plus proche à partir d\'une recherche itérative (jusqu\'à un rayon de 100km) dans les données Openstreetmap en utilisant l\'<strong>API Overpass</strong>. </li> <li> <strong><a href="https://brouter.de/" target="_blank">BRouter.de</a></strong> pour les trajets en train, qui suit autant que possible les chemins de fer. L\'outil sélectionne la gare la plus proche à partir d\'une recherche itérative (jusqu\'à un rayon de 10km) dans les données Openstreetmap en utilisant l\'<strong>API Overpass</strong>. </li> </ul> </br> <li> Le nombre total de kilomètres est envoyé à <strong><a href="https://impactco2.fr/transport" target="_blank">Mon Impact Transport API</a></strong> (fourni par l\'ADEME, l\'agence de transition écologique du gouvernement français), avec le mode de transport choisi. Cette dernière renvoie les émissions de CO2 (en kgco2e), puis les divise par le nombre de passagers si spécifié. </li> <ul> <li> <i>Le nombre de passagers par défaut est "1" pour tout transport autre que "voiture" et "voiture électrique", car l\'estimation retournée par ADEME pour les autres profils suppose une occupation moyenne des transports.</i> </li> </ul> </br> <li> Le tableau de points GPS est affiché sous forme de ligne sur une carte <strong><a href="https://leafletjs.com/" target="_blank">Leaflet</a></strong>, centrée pour s\'adapter à l\'itinéraire global dans la fenêtre. Cela est utile pour voir si le résultat de l\'outil correspond effectivement au voyage prévu ou réalisé. </li> </ul> <div class="alert alert-dark" role="alert"> Aucune donnée n\'est stockée sur le serveur, tous les calculs sont effectués côté client par le navigateur Web. Tout est écrit en HTML5/Javascript et est embelli avec la bibliothèque CSS Bootstrap 5. Certaines fonctions (validation des coordonnées GPS) ont été écrites par intelligence artificielle en utilisant des prompts <strong><a href="https://chat.openai.com/" target="_blank">ChatGPT</a></strong>. </div> Tous les bugs recensés et les fonctionnalités futures peuvent être trouvés sur <a href="./changelog.html" class="link-dark">la page de changelog</a>. Le code est disponible sur <a href="https://github.com/tomasbastien/co2e-calculator" target="_blank" class="link-dark">GitHub</a>. </div>',
}
