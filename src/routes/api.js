const {
    Router
} = require('express');

const app = Router();

const HistorialPresion = require('../controllers/HistorialPresion');
const InfoMedica = require('../controllers/InfoMedica');
const User = require('../controllers/User');

app.get(HistorialPresion.index);
app.post('/isAuthenticated', HistorialPresion.create);
// .put(HistorialPresion.update);

app.delete('/HistorialPresion/:HistorialId', HistorialPresion.remove);

app.get(InfoMedica.index);
app.post('/isAuthenticated', InfoMedica.create);
app.delete('/infoMedica/:InfoMedicaId', InfoMedica.remove);

app.post('/auth/signup', User.create);
app.post('/auth/login', User.login);
app.get('/users', User.index);
app.delete('/users/:userId', User.remove)

module.exports = app;