const {
    Router
} = require('express');

const app = Router();

const HistorialPresion = require('../controllers/HistorialPresion');
const InfoMedica = require('../controllers/InfoMedica');
const User = require('../controllers/User');
const Registry = require('../controllers/Registry');
const CreateAccount = require('../controllers/CreateAccount');


//Crear Cuenta
app.get('/CreateAccount', CreateAccount.index);
app.post('/isAuthenticated', CreateAccount.create);
app.delete('/CreateAccount/:accountId', CreateAccount.remove);

//HistorialPresion
app.get('/HistorialPresion', HistorialPresion.index);
app.post('/HistorialPresion', HistorialPresion.create);
app.delete('/HistorialPresion/:HistorialId', HistorialPresion.remove);

//Crear Información Medica
app.get('/InfoMedica', InfoMedica.index);
app.post('/InfoMedica', InfoMedica.create);
app.delete('/InfoMedica/:InfoMedicaId', InfoMedica.remove);

//Registro
app.get('/Registry', Registry.index);
app.post('/Registry', Registry.create);
app.delete('/Registry/:registryId', Registry.remove);


//Login
app.post('/auth/signup', User.create);
app.post('/auth/login', User.login);
app.get('/users', User.index);
app.delete('/users/:userId', User.remove)

module.exports = app;
