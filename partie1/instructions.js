show dbs
use uqac
show collections

professeurs = db.professeurs
professeurs.count()
// 1 - trouver le professeur Étienne Tremblay
etienne_tremblay = {"nom": "Tremblay", "prenom": "Etienne"}
champs_a_conserver = {"nom":true, "prenom":true}
db.professeurs.find(etienne_tremblay, champs_a_conserver)
//*************************************************************************************************

// 2 - trouvez le professeur Luc Lamontagne
luc_lamontagne = {"Nom": "Lamontagne", "Prenom": "Luc"}
db.professeurs.find({"Nom": "Lamontagne", "Prenom": "Luc"})
// pourtant il y a bel et bien un professeur nommé Luc Lamontagne. quel est le problème ??
// Les attribut "Prénom" et "Nom" ne devraient pas être écrit avec des majuscules, donc "prenom" et "nom"

//*************************************************************************************************

// 3 - Enlevez les cours donnés à la session précédente par Richard Khoury

//Voir les cours donner par Richard Khoury
db.professeurs.find({"prenom":"Richard"},{"nom":"Khoury"})

//*************************************************************************************************

// 4 - Ajouter un nouveau professeur de votre choix. Il devrait au moins avoir un nom, prenom et une date de naissance ?
db.professeurs.insert(
    {
        "prenom":"Éric",
        "nom":"Dallaire",
        "date_de_naissance":Date("<1980-01-20>")
      }
)
// 5 - Il semble qu'il y ait un professeur qui soit en double. Est-ce possible d'enlever la deuxieme occurence ? 
// Dans les version précédentes de MongoDB, il existait la fonction dropdups pour faire ce genre d'opération, cepandant cette fonction n'existe plus.
// Nous pourrions donc 


//*************************************************************************************************
// 6 - Comment trouver tous les professeurs d'un département commençant par DI - (par exemple DIM) ?
// Nous pouvons utilisé les expressions régulières dans les requêtes MongoDB.
// Voici l'expression régulière pour les mot commençant par DI: 

db.professeurs.find(
    {
        "departement":{$regex: /^DI/}
    }
)
//*************************************************************************************************

// 7 - Est-ce qu'il serait possible de n'avoir que leur nom et prénom ?
// Voici la même requête que le numéro précédent, mais en ayant seulement le nom et prénom des professeurs lié au département commençant par DI.

db.professeurs.find(
    
        {
        "departement":{$regex: /^DI/}
        },
        {
        "prenom":true,
        "nom":true,
        _id:false 
        }
)

//*************************************************************************************************

// 8 - Est-ce qu'il serait possible de normaliser les noms dans la base de données pour que les prénoms soient en minuscule et les noms en majuscule? 
// Il est possible de créer un fichier collation pour spécifier certaines rèegles à propos de la langue utilisé dans la base de données https://www.mongodb.com/docs/manual/reference/collation/
// Ce fichier d'émettre certaines règles, comme l'utilisation de lettre majuscule uniquement ou l'ajout de certains accents.
// Il est aussi interessant de noté qu'il est possible de faire un index case insensitive : https://www.mongodb.com/docs/manual/core/index-case-insensitive/

//*************************************************************************************************



// 9 - A quelle date a été ajouté le professeur Richard Khoury dans la base de données ?

db.professeurs.find(
    
    {
    "prenom":"Richard",
    "nom":"Khoury"
    },
    {
    "prenom":true,
    "nom":true,
    date:true,
    _id:false 
    }
)



