import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { VodkaServiceService } from '../serviceVodka/vodka-service.service';

@Component({
  selector: 'app-vodka',
  standalone: true,
  imports: [HttpClientModule],
  providers:[VodkaServiceService],
  templateUrl: './vodka.component.html',
  styleUrl: './vodka.component.css'
})
export class VodkaComponent {
  cocteles: any[]=[];

  constructor(private coctelServicio: VodkaServiceService){}
 
  ngOnInit(): void{
   this.coctelServicio.obtenerCocteles().subscribe(datos => {
     this.cocteles = datos.drinks;
   });
  }
}
