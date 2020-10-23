import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IProvincia } from "../models/provincia";

@Injectable({
  providedIn: 'root'
})
export class ProvinciaService {

  constructor(private http:HttpClient) { 

  }
  getProvincia()
  {
    return this.http.get<IProvincia[]>('http://localhost:3000/provincia');
  }
}