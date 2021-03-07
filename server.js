const app = require('./index');
const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Le serveur ecoute sur le port: ${port}`);
})