import bduqac from bd_uqac.json



https://stackoverflow.com/questions/49895447/i-want-to-execute-mongoimport-on-a-docker-container


modify and append : --jsonArray

https://stackoverflow.com/questions/58150528/mongodb-atlas-mongoimport-issues-cannot-decode-array-into-a-d

db.professeurs.insert(
[{
  "prenom":"Etienne",
  "nom":"Marceau",
  "cours":"6GEI700",
  "departement":"DSA",
  "ecole":"uqac",
  "cours_derniere_session":["6GEI329","6GEN106"]
},
{
  "prenom":"Jimmy",
  "nom":"Girard-Nault",
  "cours":"8TRD157",
  "departement":"DIM",
  "ecole":"uqac",
  "age":32
},
{
  "prenom":"Julie",
  "nom":"Langevin",
  "departement":"STI",
  "ecole":"uqac"
},
{
  "prenom":"Richard",
  "nom":"Khoury",
  "departement":"DIM",
  "ecole":"uqac",
  "cours_derniere_session":["8PRO107"]
},
{
  "prenom":"Luc",
  "nom":"Lamontagne",
  "cours":"8INF851",
  "departement":"DIM",
  "ecole":"uqac"
},
{
  "prenom":"Philippe",
  "nom":"Gregoire",
  "cours":"2CTB104",
  "departement":"DSEA",
  "ecole":"uqac"
},
{
  "prenom":"Philippe",
  "nom":"Gregoire",
  "cours":"2ECO205",
  "departement":"DSEA",
  "ecole":"uqac"
}])