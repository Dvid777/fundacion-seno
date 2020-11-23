import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";

import { IGaleria } from "../models/galeria";

import { IGaleriaDetalle } from "src/app/models/galeria_detalle";

@Injectable({
  providedIn: 'root'
})
export class GaleriaService {

  constructor(private http:HttpClient) {

   }

   saveGaleria(datosGaleria:IGaleria, files:FileList)
   {
     const fd = new FormData();

     fd.append('nombre_imagen',datosGaleria.descripcion);
     fd.append('fecha_imagen',datosGaleria.fecha);
     
    for (let index = 0; index < files.length; index++) {
      
      fd.append('img_galeria',files[index])

    }

     return this.http.post('http://localhost:3000/galeria',fd);
   }

   getGaleria()
   {
     return this.http.get<IGaleria[]>('http://localhost:3000/galeria');
   }

   getImageGaleria(id_galeria:number)
   {
     return this.http.get<IGaleriaDetalle[]>('http://localhost:3000/galeria-imagen/'+id_galeria)
   }

   addImageGaleria(id_galeria:number, files:FileList)
   {
    const fd = new FormData();

    for (let index = 0; index < files.length; index++) {
     
      fd.append('img_galeria',files[index]);
      
    }

    return this.http.put('http://localhost:3000/agregar-imagenes-galeria/'+id_galeria,fd);
   }

   deleteImageGaleria(id_img_galeria:number,public_id:string)
   {
    return this.http.delete('http://localhost:3000/detalle-imagen-galeria/'+id_img_galeria+'/'+public_id)
   }

   deleteGaleria(id_galeria:number)
   {
     return this.http.delete('http://localhost:3000/galeria/'+id_galeria);
   }

   updateGaleria(datosGaleria:IGaleria)
   {
     let id_galeria = datosGaleria.id_galeria;
    return this.http.put('http://localhost:3000/galeria/'+id_galeria ,datosGaleria);
   }
}
