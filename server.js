const app = require('./index');
const port = process.env.PORT || 4001

app.listen(port, () => {
    console.log(`Le serveur ecoute sur le port: ${port}`);
})