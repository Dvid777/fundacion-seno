"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const galeria_controllers_1 = require("../controllers/galeria.controllers");
const multer_1 = __importDefault(require("../libs/multer"));
const enrutadorGaleria = express_1.Router();
let galeriaController = new galeria_controllers_1.GaleriaController();
enrutadorGaleria.route('/galeria').post(multer_1.default.array('img_galeria'), galeriaController.guardarGaleria);
enrutadorGaleria.route('/galeria').get(galeriaController.listarGaleria);
enrutadorGaleria.route('/galeria/:id_galeria').delete(galeriaController.eliminarGaleria);
enrutadorGaleria.route('/galeria/:id_galeria').put(galeriaController.actualizarGaleria);
enrutadorGaleria.route('/galeria-imagen/:id_galeria').get(galeriaController.obtenerGaleria);
enrutadorGaleria.route('/agregar-imagenes-galeria/:id_galeria').put(multer_1.default.array('img_galeria'), galeriaController.agregarImagenesGaleria);
enrutadorGaleria.route('/detalles-imagen-galeria/:id_img_galeria/:public_id').delete(galeriaController.eliminarImagenGaleria);
exports.default = enrutadorGaleria;
