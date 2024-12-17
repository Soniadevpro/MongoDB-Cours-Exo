// --------------  07-delete.js ------

// Mongoose offre plusieurs méthodes pour supprimer des documents. Voici les principales :

// a. deleteOne()
//     Supprime un seul document correspondant à un filtre.
//     Si plusieurs documents correspondent, seul le premier document trouvé sera supprimé.
//     Exemple :
//         User.deleteOne({ email: 'alice@example.com' })
//         .then(result => console.log('Document supprimé :', result))
//         .catch(err => console.error('Erreur lors de la suppression :', err));
        // Filtre : { email: 'alice@example.com' } sélectionne le document à supprimer.

// b. deleteMany()
//     Supprime tous les documents correspondant à un filtre.
//     Exemple :
//         User.deleteMany({ age: { $lt: 18 } })
//         .then(result => console.log('Documents supprimés :', result))
//         .catch(err => console.error('Erreur lors de la suppression :', err));
        // Filtre : { age: { $lt: 18 } } supprime tous les utilisateurs de moins de 18 ans.

// c. findOneAndDelete()
//         Trouve et supprime un document correspondant à un filtre.
//         Retourne directement le document supprimé.
//         Exemple :
//             User.findOneAndDelete({ email: 'bob@example.com' })
//             .then(user => console.log('Document supprimé :', user))
//             .catch(err => console.error('Erreur lors de la suppression :', err));
            // Contrairement à deleteOne, cette méthode retourne le document supprimé, ce qui peut être utile si vous devez vérifier ses valeurs.

// d. findByIdAndDelete()
//     Supprime un document en utilisant son _id.
//     Retourne directement le document supprimé.
//     Exemple :
//         User.findByIdAndDelete('64aee63e74f8ad001efb529b')
//         .then(user => console.log('Document supprimé par ID :', user))
//         .catch(err => console.error('Erreur lors de la suppression :', err));            
            // Pratique lorsque vous travaillez avec des identifiants uniques
        
            const express = require('express');
            const mongoose = require('mongoose');
            const db = require('./db')
            const app = express();
            const port = 3000;
            
            
            
            
            
            
            
            
            app.get('/' , async (req,res) => {
            await db.connectDB();
                // Ajouter un utilisateur :
            db.User.findByIdAndDelete('67617876355cc099fd98916b')
            .then(user => console.log('Document supprimé par ID :', user))
                    .catch(err => console.error('Erreur lors de la suppression :', err));  
            
            res.send('Serveur Express connecté à mongoDB')
                });
            
            
            
            
            
            
            
            app.listen(port, () => {
                console.log(`Serveur en écoute sur le port ${port}`);
            });