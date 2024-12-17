////////////// 03-Schema.js
// Créer un Schéma et un Modèle


// Les schémas et modèles sont des concepts essentiels pour structurer et interagir avec les données dans MongoDB en utilisant Mongoose. 

// ---------------------
//                             Schéma:
// Un Schéma est une définition de la structure des documents dans une collection MongoDB.
// Le Schéma agit comme le plan pour structurer les données d'un utilisateur.
// Par exemple, si quelqu’un essaie d’ajouter un utilisateur sans "name" ou "email", Mongoose rejettera l’opération.

// Il agit comme un "plan" qui définit :

//     Quels champs les documents peuvent avoir.
//     Quels sont les types de données de ces champs.
//     Les règles ou les validations appliquées à ces champs.



// Schéma:
// Un Schéma est une définition de la structure des documents dans une collection MongoDB.
// Le Schéma agit comme le plan pour structurer les données d'un utilisateur.
// Par exemple, si quelqu’un essaie d’ajouter un utilisateur sans "name" ou "email", Mongoose rejettera l’opération.

// Il agit comme un "plan" qui définit :

//     Quels champs les documents peuvent avoir.
//     Quels sont les types de données de ces champs.
//     Les règles ou les validations appliquées à ces champs.
//     Exemple de Schéma :








// Points importants :
//         Les Schémas sont définis avec mongoose.Schema.
//         Vous pouvez spécifier des propriétés comme :
//         type : Le type de données du champ (String, Number, Date, etc.).
//         required : Rend le champ obligatoire.
//         default : Définit une valeur par défaut.
//         unique : Garantit que chaque valeur dans ce champ est unique.
//         Un Schéma n'interagit pas directement avec la base de données, mais il sert de guide pour créer un Modèle.
//         https://mongoosejs.com/docs/guide.html




// Modèle                        

// Un Modèle Mongoose fournit une interface pour interagir avec une collection MongoDB spécifique. 
// Il encapsule les opérations de création, lecture, mise à jour et suppression (CRUD) pour cette collection

// Lorsque vous créez un Modèle, Mongoose :
//     Associe automatiquement le Modèle à une collection MongoDB. 
//     Fournit une API pour effectuer des opérations sur la collection, 
//     comme la création de nouveaux documents, la recherche, la mise à jour et la suppression.
//     Applique le Schéma défini à chaque document de la collection, assurant ainsi la cohérence des données.





    /*
1 Créez un schéma pour users avec les champs :
nom : String, obligatoire,
email : String, obligatoire et unique,
age : Number.

2 Créez un modèle basé sur ce schéma.
*/


// const Users = mangoose.model('Users', userSchema);



const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

async function connectTotestDB() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/testDB');
        console.log('Connexion à MongoDB réussie !');
    } catch (err) {
        console.log('Connexion à MongoDB échouée !', err);
    }
};

connectTotestDB()



const mongooseshe = require('mongoose');
// le Schéma
const userSchema = new mongoose.Schema({
name: { type: String, required: true },  // Champ "name" obligatoire de type String
email: { type: String, unique: true },  // Champ "email" unique
age: { type: Number, min: 0 },          // Champ "age" avec une valeur minimale de 0
createdAt: { type: Date, default: Date.now } // Champ "createdAt" avec une valeur par défaut
});



//Créer le Modèle
const User = mongoose.model('User', userSchema);

app.get('/' , (req,res) => {

    // Ajouter un utilisateur :
    User.create({ name: 'Alice', email: 'alice@example.com', age: 25 })
        .then(user => console.log('Utilisateur ajouté :', user))
        .catch(err => console.error('Erreur :', err));
    res.send('Serveur Express connecté à mongoDB')
})




app.listen(port, () => {
    console.log(`Serveur en écoute sur le port ${port}`);
});