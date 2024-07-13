import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { WineServiceService } from '../wineService/wine-service.service';

@Component({
  selector: 'app-wine',
  standalone: true,
  imports: [HttpClientModule],
  providers:[WineServiceService],
  templateUrl: './wine.component.html',
  styleUrl: './wine.component.css'
})
export class WineComponent {
  cocteles: any[]=[];

  constructor(private coctelServicio: WineServiceService){}
 
  ngOnInit(): void{
   this.coctelServicio.obtenerCocteles().subscribe(datos => {
     this.cocteles = datos.drinks;
   });
  }
}
