import { Component, } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { TequilaServiceService } from '../serviceTequila/tequila-service.service';



@Component({
  selector: 'app-tequila',
  standalone: true,
  imports: [HttpClientModule],
  providers:[TequilaServiceService],
  templateUrl: './tequila.component.html',
  styleUrl: './tequila.component.css'
})
export class TequilaComponent {
  
  cocteles: any[]=[];

  constructor(private coctelServicio: TequilaServiceService){}
 
  ngOnInit(): void{
   this.coctelServicio.obtenerCocteles().subscribe(datos => {
     this.cocteles = datos.drinks;
   });
  }
}
