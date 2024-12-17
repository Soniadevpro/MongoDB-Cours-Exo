//////////////////////// 06-update.js////////////
// La mise à jour de documents dans MongoDB avec Mongoose est une opération courante.

// Méthodes de mise à jour des documents:

// a. User.updateOne()
//     Met à jour un seul document correspondant à un filtre.
//     Ne retourne pas directement le document mis à jour.
//     exemple: 
//         User.updateOne({ email: 'alice@example.com' }, { $set: { age: 30 } })
//         .then(result => console.log('Résultat de la mise à jour :', result))
//         .catch(err => console.error('Erreur lors de la mise à jour :', err));
//             // Filtre : { email: 'alice@example.com' } pour trouver le document à mettre à jour.
//             // Mise à jour : { $set: { age: 30 } } pour définir une nouvelle valeur pour age.      

// b. User.updateMany()
//     Met à jour plusieurs documents correspondant à un filtre.
//     Exemple :
//         User.updateMany({ age: { $lt: 18 } }, { $set: { age: 18 } })
//         .then(result => console.log('Documents mis à jour :', result))
//         .catch(err => console.error('Erreur lors de la mise à jour :', err));
//         // Filtre : { age: { $lt: 18 } } pour sélectionner les utilisateurs de moins de 18 ans.
//         // Mise à jour : { $set: { age: 18 } } pour définir l'âge à 18.

// c. User.findByIdAndUpdate()
//     Met à jour un document par son _id.
//     Retourne le document avant ou après la mise à jour selon l'option new.  
//     Exemple: 
//         User.findByIdAndUpdate('64aee63e74f8ad001efb529b', { age: 35 }, { new: true })
//         .then(user => console.log('Utilisateur mis à jour :', user))
//         .catch(err => console.error('Erreur lors de la mise à jour :', err));
//         //       Paramètres :
//         // 1er argument : L'_id du document.
//         // 2e argument : Les modifications ({ age: 35 }).
//         // 3e argument : { new: true } pour retourner le document mis à jour.

// d. User.findOneAndUpdate()
//     Met à jour un document correspondant à un filtre.
//     Similaire à updateOne, mais retourne le document (avant ou après la mise à jour).
//     Exemple :
//     User.findOneAndUpdate({ email: 'bob@example.com' }, { age: 40 }, { new: true })
//         .then(user => console.log('Document mis à jour :', user))
//         .catch(err => console.error('Erreur lors de la mise à jour :', err));



/*
Modifiez l’âge d’Alice pour qu’il soit égal à 26.
Affichez un message indiquant que la mise à jour est réussie.
*/


const express = require('express');
const mongoose = require('mongoose');
const db = require('./db')
const app = express();
const port = 3000;








app.get('/' , async (req,res) => {
await db.connectDB();
    // Ajouter un utilisateur :
db.User.findOneAndUpdate({email : 'alice@example.com'}, {age:78}, {new : true})
.then(user => console.log('Document mis à jour :', user))
.catch(err => console.error('Erreur lors de la mise à jour :', err));

res.send('Serveur Express connecté à mongoDB')
    });







app.listen(port, () => {
    console.log(`Serveur en écoute sur le port ${port}`);
});