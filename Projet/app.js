const express = require('express');
const app = express();

const PORT = 8080;

//------------------------------------------------------------------------

app.use('/css', express.static('CSS'));
app.use('/images', express.static('images'))


//On déclare le template ejs
app.set('views','./views') ;
    app.set('view engine','ejs') ;

//------------------------------------------------------------------------

//Ecoute le port et l'écrit dans la console
app.listen(PORT, () => {
    console.log('Nous sommes sur le port', PORT);
});

//------------------------------------------------------------------------

//Gestion des erreurs



//------------------------------------------------------------------------

//INDEX
//Pour l'URL / affiche index
app.get('/', (req,res) => {
    res.render("index") ;
});

//------------------------------------------------------------------------

//ACTIVITES
app.get('/activites', (req,res) => {
    res.render("activites");
});

//Methode de rooting
app.get('/activites/:id', (req,res) => {
    const id = req.params.id ;
    res.send(`Activité numero ${id}`) ;
});

//------------------------------------------------------------------------

//LIEUX
app.get('/lieux', (req,res) => {
    res.render("lieux");
});

//Methode de rooting
app.get('/lieux/:id', (req,res) => {
    const id = req.params.id ;
    res.send(`lieu numero ${id}`) ;
});

//------------------------------------------------------------------------

//BUREAU
app.get('/bureau', (req,res) => {
    res.render("bureau");
});

//------------------------------------------------------------------------

//ANIMATEURS
app.get('/animateurs', (req,res) => {
    res.render("animateurs");
});

//------------------------------------------------------------------------

//CONNEXION
app.get('/connexion', (req,res) => {
    res.render("connexion");
});

//------------------------------------------------------------------------

//INSCRIPTION
app.get('/inscription', (req,res) => {
    res.render("inscription");
});

//------------------------------------------------------------------------

//CONTACT
app.get('/contact', (req,res) => {
    res.render("contact");
});