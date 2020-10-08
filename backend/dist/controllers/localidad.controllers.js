"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database");
class LocalidadController {
    listarLocalidad(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conex = yield database_1.conexion();
            let localidad = yield conex.query('select * from localidad');
            return res.json(localidad);
        });
    }
    crearLocalidad(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let localidad = req.body;
            const conex = yield database_1.conexion();
            yield conex.query("insert into localidad set ?", [localidad]);
            return res.json('Localidad Creada');
        });
    }
    eliminarLocalidad(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conex = yield database_1.conexion();
            let id_localidad = req.params.id;
            yield conex.query("delete from localidad where id_localidad = ?", id_localidad);
            return res.json('Localidad Eliminada');
        });
    }
    actualizarLocalidad(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conex = yield database_1.conexion();
            let id_localidad = req.params.id;
            let nueva_localidad = req.body;
            yield conex.query("update localidad set ? where id_localidad = ?", [nueva_localidad, id_localidad]);
            return res.json('Localidad Actualizada');
        });
    }
    obtenerLocalidad(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conex = yield database_1.conexion();
            let id_localidad = req.params.id;
            let unaLocalidad = yield conex.query("select * from localidad where id_localidad = ?", [id_localidad]);
            return res.json(unaLocalidad[0]);
        });
    }
}
exports.LocalidadController = LocalidadController;