"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const galeria_controllers_1 = require("../controllers/galeria.controllers");
const enrutadorGaleria = express_1.Router();
let galeriaController = new galeria_controllers_1.GaleriaController();
enrutadorGaleria.route('/galeria').get(galeriaController.listarGaleria);
enrutadorGaleria.route('/galeria').post(galeriaController.crearGaleria);
enrutadorGaleria.route('/galeria/:id').delete(galeriaController.eliminarGaleria);
enrutadorGaleria.route('/galeria/:id').put(galeriaController.actualizarGaleria);
enrutadorGaleria.route('/galeria:id').get(galeriaController.obtenerGaleria);
exports.default = enrutadorGaleria;