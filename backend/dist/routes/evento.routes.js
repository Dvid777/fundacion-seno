"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const evento_controllers_1 = require("../controllers/evento.controllers");
const multer_1 = __importDefault(require("../libs/multer"));
const enrutadorEvento = express_1.Router();
let eventoController = new evento_controllers_1.EventoController();
enrutadorEvento.route('/eventos').post(multer_1.default.array('img_evento'), eventoController.guardarEvento);
enrutadorEvento.route('/eventos').get(eventoController.listarEvento);
enrutadorEvento.route('/eventos-imagenes/:id_evento').get(eventoController.listarImagenesEvento);
enrutadorEvento.route('/agregar-imagenes-evento/:id_evento').put(multer_1.default.array('img_evento'), eventoController.agregarImagenesEvento);
enrutadorEvento.route('/detalles-imagen-evento/:id_img_evento/:public_id').delete(eventoController.eliminarImagenesEvento);
enrutadorEvento.route('/eventos/:id_evento').delete(eventoController.eliminarEvento);
enrutadorEvento.route('/eventos/:id_evento').put(eventoController.actualizarEvento);
enrutadorEvento.route('/evento-portada/:id_img_evento/:id_evento').get(eventoController.establecerPortada);
exports.default = enrutadorEvento;
