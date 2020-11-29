import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { EventoService } from "../../services/evento.service";
import { IEventoDetalle } from "../../models/eventoDetalle";
import { FormBuilder,FormGroup } from "@angular/forms";
import { IHtmlInputEvent } from "../../models/imputElement";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-admin-detalle-evento',
  templateUrl: './admin-detalle-evento.component.html',
  styleUrls: ['./admin-detalle-evento.component.css']
})
export class AdminDetalleEventoComponent implements OnInit {

  id_evento:number;

  imagenes_evento:IEventoDetalle[] = [];

  formDetalleEvento:FormGroup;

  archivos:FileList;

  imagenes_leidas = [];
  

  constructor(private spinner:NgxSpinnerService, private fb:FormBuilder, private activatedRoute:ActivatedRoute,private eventoServ:EventoService) 
  {
    this.formDetalleEvento = this.fb.group({
      archivo:['']
    });
   }

  ngOnInit(): void {
  
    this.activatedRoute.params.subscribe(
      params => {
        this.id_evento = params.id_evento
      }
    );

    this.listarImagenesEvento(this.id_evento);
  }  

  listarImagenesEvento(id_evento:number)
  {
    this.eventoServ.getImageEvento(id_evento).subscribe(
      resultado => {
        this.imagenes_evento = resultado;
      },
      error => console.log(error)
    )
  }

  mostrarImagenesSeleccionadas(evento:IHtmlInputEvent) 
  {
    this.archivos = evento.target.files;
    if(this.archivos)
    {
      for (let index = 0; index < this.archivos.length; index++) {
        const reader = new FileReader();
        reader.readAsDataURL(this.archivos[index]);
        reader.onload = () =>{
          this.imagenes_leidas.push(reader.result);
        }  
      }
    }
  }

  agregarImagenesEvento()
  {
    this.spinner.show();
     this.eventoServ.addImageEvento(this.id_evento,this.archivos).subscribe(
       resultado => {
        this.formDetalleEvento.reset();
        this.listarImagenesEvento(this.id_evento);
        this.imagenes_leidas = [];
        this.spinner.hide();
       },
       error => console.log(error)
     )
  }

  eliminarImagenEvento(id_img_evento:number, public_id:string)
  {
    this.spinner.show();
    if(confirm('Esta seguro que quiere eliminar esta imagen?')){
      this.eventoServ.deleteImageEvento(id_img_evento,public_id).subscribe(
        resultado => {
          console.log('resultado');
          this.listarImagenesEvento(this.id_evento);
          this.spinner.hide();
        }
      );
    }
   
  }

  establecerPortada(id_img_evento:number,id_evento:number)
  {
    this.eventoServ.assingPortada(id_img_evento,id_evento).subscribe(
      resultado => {
        //refrescamos la grilla
        this.listarImagenesEvento(this.id_evento);
      }
    );

  }
}

