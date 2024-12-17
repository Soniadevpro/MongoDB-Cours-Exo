
const mongoose = require('mongoose');



const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/testDB');
        console.log('Connexion à MongoDB réussie !');
    } catch (err) {
        console.log('Connexion à MongoDB échouée !', err);
    }
};
// le Schéma
const userSchema = new mongoose.Schema({
name: { type: String, required: true },  // Champ "name" obligatoire de type String
email: { type: String, unique: true },  // Champ "email" unique
age: { type: Number, min: 0 },          // Champ "age" avec une valeur minimale de 0
createdAt: { type: Date, default: Date.now } // Champ "createdAt" avec une valeur par défaut
});



//Créer le Modèle
const User = mongoose.model('User', userSchema);

module.exports = {connectDB, userSchema, User}
