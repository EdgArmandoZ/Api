import { Component } from '@angular/core';
import { OperacionesBasicasService } from './services/operaciones-basicas.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  num1: number= 0;
  num2: number= 0;
  resultado:number= 0;
  
  constructor(private servicioOperaciones: OperacionesBasicasService){}

/*   ngOnInit(): void{
this.num1= 0;
this.num2= 0;

  } */

  calcularSuma(){
    this.resultado = this.servicioOperaciones.sumar(this.num1, this.num2);
  }
  calcularResta(){
    this.resultado = this.servicioOperaciones.restar(this.num1, this.num2);
  }

  calcularMultiplicacion(){
    this.resultado = this.servicioOperaciones.multiplicar(this.num1, this.num2);
  }

  calcularDivision(){
    this.resultado = this.servicioOperaciones.dividir(this.num1, this.num2);
  }


  
}
