import { Component, OnInit } from '@angular/core';
import { ILocalidad } from "src/app/models/localidad";
import { IGaleria } from "src/app/models/galeria";
import { ICategoria } from "src/app/models/categoria_galeria";
import { LocalidadService } from "../../services/localidad.service";
import { GaleriaService } from "../../services/galeria.service";
import { CategoriaGaleriaService } from "../../services/categoria-galeria.service";
import { FormBuilder, FormGroup, Form, Validators } from "@angular/forms";
import { IHtmlInputEvent } from "src/app/models/inputElement";
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from "@angular/router";
import { $ } from 'protractor';


@Component({
  selector: 'app-admin-galeria',
  templateUrl: './admin-galeria.component.html',
  styleUrls: ['./admin-galeria.component.css']
})
export class AdminGaleriaComponent implements OnInit {
  listLocalidad:ILocalidad[] = [];
  listCategoG:ICategoria[] = [];
  listGaleria:IGaleria[] = [];

  formGaleria:FormGroup;

  file:FileList

  imagenes_url = [];

  ocultar_botom_file:any = 'display:block';

  constructor(private router:Router, private galeriaServ:GaleriaService, private spinner: NgxSpinnerService, private fb: FormBuilder, private localidadServ:LocalidadService, private categoriaServ:CategoriaGaleriaService) { 

      this.formGaleria = this.fb.group({
        id_galeria:[null],
        descripcion:['',[Validators.required, Validators.minLength(3)]],
        fecha:['',[Validators.required]],
        localidad:['',[Validators.required]],
        categoria:['',[Validators.required]],
        tipo:['',[Validators.required]],
        estado_home:['',[Validators.required]],
        file:['']
      })
  }

  ngOnInit(): void {
    this.obtenerGaleria();
    this.obtenerLocalidad();
    this.obtenerCategoria();
  }
  
  obtenerGaleria()
  {
    this.galeriaServ.getGaleria().subscribe(
      resultado => this.listGaleria = resultado,
      error => console.log(error)
    )
  }

  obtenerLocalidad()
  {
    this.localidadServ.getLocalidad().subscribe(
      respuesta =>{
        this.listLocalidad = respuesta;
      }
    )
  }

  obtenerCategoria()
  {
    this.categoriaServ.getCategoria().subscribe(
      respuesta =>{
        this.listCategoG = respuesta;
      }
    )
  }

  guardarGaleria(){
    if (this.formGaleria.value.id_galeria){
      this.spinner.show();
      this.galeriaServ.updateGaleria(this.formGaleria.value).subscribe(
        resultado =>{
          this.obtenerGaleria();
          this.formGaleria.reset();
          this.spinner.hide();
        }
      )
    
    }else{
    this.spinner.show();
    this.galeriaServ.saveGaleria(this.formGaleria.value,this.file).subscribe(
      resultado =>{
        console.log(resultado);
        this.imagenes_url =[];
        this.obtenerGaleria();
        this.formGaleria.reset();
        this.spinner.hide();
      },
      error => console.log(error)
    );
    } 
} 




  mostrarImagenSeleccionada(evento:IHtmlInputEvent){

    this.imagenes_url = [];

    this.file = evento.target.files; 

    if(this.file)
    {
      for (let index = 0; index < this.file.length; index++) {
        
        const reader = new FileReader();

        //se hace lectura de los archivos
        reader.readAsDataURL(this.file[index])

        reader.onload = () => {
            this.imagenes_url.push(reader.result)
        }
      }
    }
  }

  //metodo de mostrar detalles
  detalleGaleria(id_galeria:number)
  {
    this.router.navigate(['/admin-detalle-galeria',id_galeria])
  } 

  eliminarGaleria(id_galeria:number)
  {
    if(confirm('Desea Eliminar esta Galeria?')){
      
      this.galeriaServ.deleteGaleria(id_galeria).subscribe(
        resultado =>{
          console.log(resultado)
          this.obtenerGaleria();
        }
      );
    }

  }
  //llenar el formulario
  editarGaleria(datosGaleria:IGaleria)
  {
    this.ocultar_botom_file = 'display:none'
    this.formGaleria.setValue({
      id_galeria:datosGaleria.id_galeria,
      descripcion:datosGaleria.descripcion,
      fecha:datosGaleria.fecha,
      localidad:datosGaleria.localidad,
      categoria:datosGaleria.categoria,
      tipo:datosGaleria.tipo,
      estado_home:datosGaleria.estado_home,
      file:''
    });
  }

  vaciarForm()
  {
    this.ocultar_botom_file ='display:block';

    this.formGaleria.setValue({
      id_galeria:null,
      descripcion:'',
      fecha:'',
      localidad:'',
      categoria:'',
      tipo:'',
      estado_home:'',
      file:''
    })
  }
}
