import { Component, OnInit, Output } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent   {

  constructor(private PaisService: PaisService) { }

  termino: string = '';
  hayError : boolean = false;
  paises : Country[] = [];

  buscar(termino: string){
    this.hayError = false;
    this.termino = termino;

    this.PaisService.buscarPais(this.termino)
      .subscribe((paises)=>{
        console.log(paises);  
        this.paises = paises;              
      }
    , (error) =>{
      console.info(error);
      this.hayError = true;
      this.paises  = [];
    });
  }

  sugerencias(termino : string){
    this.hayError = false;
    //this.termino = termino;
  }

}
