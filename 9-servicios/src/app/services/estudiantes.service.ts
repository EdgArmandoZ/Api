import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Estudiante{
  id: number;
  nombre: string;
}

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {
  private estudiantes: Estudiante[]=[
    {id: 1, nombre: 'Emely Mariel'},
    {id: 1, nombre: 'Aydily Odette'},
    {id: 1, nombre: 'Lester Antonio'},
    {id: 1, nombre: 'Mynor Alexander'},
  ];
  constructor() { }

  obtenerEstudiantes(): Observable<Estudiante[]>{
    return of(this.estudiantes);
  }
}
