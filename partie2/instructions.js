use uqac
cours = db.cours

// 0. Quel est le nom du cours 8TRD157 et quel est son enseignant?

cours.find(
        {"cours.sigle":"8TRD157"},
        { _id: false, "cours.nom":true, enseignat_actuel: true}
)
// 1. Corrigez le typo dans le nom de la cle pour l'enseignant actuel du cours 8TRD157 
cours.update({"cours.sigle":"8TRD157"},
        {
                $set: {enseignant_actuel:"Jimmy Girard-Nault"},
                $unset :  {enseignat_actuel: 1}
        }
)

cours.find(
        {"cours.sigle":"8TRD157"},
        { _id: false, "cours.nom":true, enseignant_actuel: true}
)

// 2. Il faut incrémenter le compteur de 1 pour tous les cours de l'automne



// 3. Il semble qu'il manque trois professeurs pour le cours 8INF433. Veuillez ajouter "Michel Louvain", "Rick Ashtley" et "Elon Musk" à la liste.

// 4. Après avoir parlé au département des ressources humaines, vous décidez d'enlever "Michel Louvain" car ils ne sera plus professeur à l'université.

// Pour préparer des réponse aux question fréquente des étudiants, vous décidez de faire une peu d'exploration dans vos données

// 5. Combien de cours on eu moins de 2 enseignants ?

// 6. Quels sont les 2 cours du DIM (débutant par 8) ou du DSA (débutant par 6) ayant été donnés le plus souvent et combien de fois ont-ils ete offerts?

// 7. Quels cours sont donnés à l'automne et à l'hiver ?

// 8. Quel est le cours ayant eu son local officiel au P1-6350 13 fois ?

// 9. Quel est le cours le plus constant en terme de nombre d'étudiants? On cherche un cours qui a toujours eu entre 30 et 60 étudiants
