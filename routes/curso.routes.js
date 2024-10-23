// routes/curso.routes.js
const express = require('express');
const router = express.Router();
const cursoController = require('../controllers/curso.controller');

router.get('/', cursoController.getAllCursos);
router.get('/:id', cursoController.getCursoById);
router.post('/', cursoController.createCurso);
router.put('/:id', cursoController.updateCurso);
router.delete('/:id', cursoController.deleteCurso);
router.post('/activar/:id', cursoController.activarCurso);


module.exports = router;
