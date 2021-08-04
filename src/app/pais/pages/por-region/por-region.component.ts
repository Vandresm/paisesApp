import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent {

   regiones : string[] = ['africa', 'americas', 'asia', 'europe', 'oceania']
   regionActiva: string ='';
   paises : Country[] = [];
   
   hayError : boolean = false;
  
  constructor(private paisesService : PaisService) { }
  activarRegion(region:string){
    
    if (region === this.regionActiva) {
        return;
    }
    
    this.regionActiva = region; 
    this.paises = [];
    // TODO: hacer el llamado al servicio
    
    

    this.paisesService.buscarRegion(this.regionActiva)
      .subscribe((paises: Country[])=>{
        //console.log(paises);  
        this.paises = paises;              
      }
    , (error) =>{
      console.info(error);
      
      this.paises  = [];
    });
  }

  getClaseCSS (region: string){
    return (region === this.regionActiva) ? 'btn btn-primary m-1' : 'btn btn-outline-primary m-1';
  }
  

}
