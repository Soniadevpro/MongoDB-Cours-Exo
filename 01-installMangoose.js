//////////////// 02-installationMongoose.js

//  Mongoose simplifie la connexion à MongoDB et permet d'interagir avec la base de données en utilisant des modèles.
// Le processus de connexion à MongoDB avec Mongoose inclut la gestion des événements comme error .

// Étape 1 : Initialiser un projet Node.js
// 1 Créez un nouveau dossier pour votre projet et accédez-y 
// 2 Initialisez le projet
// 3  Installer les dépendances: npm install mongoose express 


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


app.listen(port, () => {
    console.log(`Serveur en écoute sur le port ${port}`);
});



/*
mongoose.connect : Méthode utilisée pour établir une connexion avec une base de données MongoDB.
Elle prend un argument :
    URI de connexion : L'adresse de la base de données MongoDB. 

        mongodb:// : Protocole utilisé pour connecter Mongoose à MongoDB.
        127.0.0.1 : Adresse IP locale (localhost) où MongoDB s'exécute.
        27017 : Port par défaut utilisé par MongoDB.
        testDB : Nom de la base de données à laquelle vous souhaitez vous connecter.
            Si la base de données n'existe pas, MongoDB la crée automatiquement dès que des données y sont ajoutées.

*/