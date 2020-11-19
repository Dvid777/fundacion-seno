"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cuidados_controllers_1 = require("../controllers/cuidados.controllers");
const multer_1 = __importDefault(require("../libs/multer"));
const enrutadorCcuidados = express_1.Router();
let cuidadosController = new cuidados_controllers_1.CuidadosController();
enrutadorCcuidados.route('/cuidados').post(multer_1.default.array('img_cuidados'), cuidadosController.guardarCuidados);
enrutadorCcuidados.route('/cuidados').get(cuidadosController.listarCuidados);
enrutadorCcuidados.route('/cuidados-imagenes/:id_cuidados').get(cuidadosController.listarImagenesCuidados);
enrutadorCcuidados.route('/agregar-imagenes-cuidados/:id_cuidados').put(multer_1.default.array('img_cuidados'), cuidadosController.agregarImagenesCuidados);
enrutadorCcuidados.route('/detalles-imagen-cuidados/:id_img_cuidados/:public_id').delete(cuidadosController.eliminarImagenesCuidados);
enrutadorCcuidados.route('/cuidados/:id_cuidados').delete(cuidadosController.eliminarCuidados);
enrutadorCcuidados.route('/cuidados/:id_cuidados').put(cuidadosController.actualizarCuidados);
enrutadorCcuidados.route('/cuidados-portada/:id_img_cuidados/:id_cuidados').get(cuidadosController.establecerPortada);
exports.default = enrutadorCcuidados;
