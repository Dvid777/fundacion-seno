import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material-module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProvinciaComponent } from './components/provincia/provincia.component';
import { MenuComponent } from './components/menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { LocalidadComponent } from "./components/localidad/localidad.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { NgxPaginationModule } from "ngx-pagination";
import { TipoAcompaniamientoComponent } from './components/tipo-acompaniamiento/tipo-acompaniamiento.component';
import { CategoriaDonacionesComponent } from './components/categoria-donaciones/categoria-donaciones.component';
import { DonacionesComponent } from './components/donaciones/donaciones.component';
import { CategoriaGaleriaComponent } from './components/categoria-galeria/categoria-galeria.component';
import { CategoriaEventoComponent } from './components/categoria-evento/categoria-evento.component';
import { AdminEventoComponent } from './components/admin-evento/admin-evento.component';
import { AdminDetalleEventoComponent } from './components/admin-detalle-evento/admin-detalle-evento.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { EventosComponent } from './components/eventos/eventos.component';
import { EventoDetalleComponent } from './components/evento-detalle/evento-detalle.component';



@NgModule({
  declarations: [
    AppComponent,
    ProvinciaComponent,
    MenuComponent,
    LocalidadComponent,
    TipoAcompaniamientoComponent,
    CategoriaDonacionesComponent,
    DonacionesComponent,
    CategoriaGaleriaComponent,
    CategoriaEventoComponent,
    AdminEventoComponent,
    AdminDetalleEventoComponent,
    EventosComponent,
    EventoDetalleComponent

   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    MaterialModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    NgxSpinnerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
