const express = require('express');
const app = express();

const PORT = 8080;

//------------------------------------------------------------------------

//Appel des dossiers
app.use('/css', express.static('CSS'));
app.use('/images', express.static('images'));
app.use('/js', express.static('js'))

//On déclare le template ejs
app.set('views','./views') ;
    app.set('view engine','ejs') ;

//------------------------------------------------------------------------

//Ecoute le port et l'écrit dans la console
app.listen(PORT, () => {
    console.log('Nous sommes sur le port', PORT);
});

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
    res.render(`activites/activite_${id}`) ;
});

//------------------------------------------------------------------------

//LIEUX
app.get('/lieux', (req,res) => {
    res.render("lieux");
});

//Methode de rooting
app.get('/lieux/:id', (req,res) => {
    const id = req.params.id ;
    res.render(`lieux/lieu_${id}`) ;
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
    res.render("user/connexion");
});

app.get('/MonEspace', (req, res) =>{
    res.render('user/espaceuser');
});

app.get('/MonEspace/Form2', (req, es) => {
    res.render('user/form2');
})

//------------------------------------------------------------------------

//INSCRIPTION
app.get('/inscription/:id', (req,res) => {
    const id = req.params.id ;
    res.render(`inscription/${id}`) ;
});

//------------------------------------------------------------------------

//CONTACT
app.get('/contact', (req,res) => {
    res.render("contact");
});

//------------------------------------------------------------------------

//Gestion des erreurs
// Handle 404
app.use(function(req, res) {
    res.status(400);
    res.render('./erreurs/404.ejs', {title: '404: Fichier introuvable sale noob'});
});

// Handle 500
app.use(function(error, req, res, next) {
    res.status(500);
    res.render('./erreurs/500.ejs', {title:'500: Erreur interne du serveur, il a planté ce con', error: error});
});