import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { WineServiceService } from './wineService/wine-service.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HttpClientModule],
 /*  providers: [WineServiceService], */

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
/*  cocteles: any[]=[];

 constructor(private coctelServicio: WineServiceService){}

 ngOnInit(): void{
  this.coctelServicio.obtenerCocteles().subscribe(datos => {
    this.cocteles = datos.drinks;
  });
 }  */
}
