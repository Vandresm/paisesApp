import { Component, OnInit, Output } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
    li{cursor:pointer;}
    `
  ]
})
export class PorPaisComponent   {

  constructor(private PaisService: PaisService) { }

  termino: string = '';
  hayError : boolean = false;
  sugerencia : boolean = false;
  paises : Country[] = [];
  paisesSugeridos : Country[] = [];

  buscar(termino: string){
    this.hayError = false;
    this.termino = termino;
    this.sugerencia = false;

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
    this.termino = termino;
    this.sugerencia = true;
    this.PaisService.buscarPais(termino)
     .subscribe(
       paises =>  this.paisesSugeridos = paises.splice(0,5),
       (err) => this.paisesSugeridos=[]
       );
  }


  buscarSugerido(termino: string){
    this.buscar(termino);
    this.sugerencia = false;
  }

}
