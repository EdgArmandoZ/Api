import { Component, OnInit } from '@angular/core';
import { EstudiantesService } from '../services/estudiantes.service';

@Component({
  selector: 'app-lista-estudiantes',
  standalone: true,
  imports: [],
  templateUrl: './lista-estudiantes.component.html',
  styleUrl: './lista-estudiantes.component.css'
})
export class ListaEstudiantesComponent {

  estudiantes: Estudiante[]=[];

  constructor(private estudianteServicio: EstudiantesService){}

  ngOnInit(): void{
    /* console.log("La aplicacion ha inicializado") */

    this.estudianteServicio.obtenerEstudiantes().subscribe(estudiantes=> this.estudiantes= estudiantes);
  }

}
