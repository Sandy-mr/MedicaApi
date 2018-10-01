const {
    Router
} = require('express');

const app = Router();

const HistorialPresion = require('../controllers/HistorialPresion');
const InfoMedica = require('../controllers/InfoMedica');

app.get('/HistorialPresion', HistorialPresion.index);
app.post('/HistorialPresion', HistorialPresion.create);
// .put(HistorialPresion.update);

app.delete('/HistorialPresion/:HistorialId', HistorialPresion.remove);
// app.get('/HistorialPresion/:HistorialId', HistorialPresion.getById);

app.get('/InfoMedica', InfoMedica.index);
app.post('/InfoMedica', InfoMedica.create);
app.delete('/infoMedica/:InfoMedicaId', InfoMedica.remove);


module.exports = app;