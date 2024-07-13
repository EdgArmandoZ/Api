import { Component, inject } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MargaritaServiceService } from '../serviceMargarita/margarita-service.service';

@Component({
  selector: 'app-margarita',
  standalone: true,
  imports: [HttpClientModule],
  providers:[MargaritaServiceService],
  templateUrl: './margarita.component.html',
  styleUrl: './margarita.component.css'
})
export class MargaritaComponent {
  cocteles: any[]=[];

  constructor(private coctelServicio: MargaritaServiceService){}
 
  ngOnInit(): void{
   this.coctelServicio.obtenerCocteles().subscribe(datos => {
     this.cocteles = datos.drinks;
   });
}
}
