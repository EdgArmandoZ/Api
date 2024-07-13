import { Component } from '@angular/core';
import { ListaEstudiantesComponent } from './lista-estudiantes/lista-estudiantes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListaEstudiantesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
