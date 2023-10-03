import {Component} from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Libro: Programacion', weight: '11/06/2023', symbol: 'Pendiente'},
  {position: 2, name: 'Libro: Matematicas', weight:' 13/07/2023', symbol: 'Pendiente'},
  {position: 3, name: 'Libro: Integraciones 2', weight: '20/07/2023', symbol: 'Pendiente'},
  {position: 4, name: 'Libro: Conocimientos basicos de Programación', weight: '07/06/2023', symbol: 'Aprobado'},
  {position: 5, name: 'Libro: Fundamentos de Programación', weight: '11/06/2023', symbol: 'Entregado'},
  {position: 6, name: 'Libro: Introduccion a la Biologia', weight: '18/06/2023', symbol: 'Entregado'},
  {position: 7, name: 'Libro: Principios de Economia', weight: '23/06/2023', symbol: 'Entregado'},
  {position: 8, name: 'Libro: Historia de la Filosofía', weight: '11/05/2023', symbol: 'Entregado'},
  {position: 9, name: 'Libro: El capital', weight: '12/05/2023', symbol: 'Entregado'},
  {position: 10, name: 'Libro: Metodos de Investigación', weight: '21/03/2023', symbol: 'Entregado'},
];

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}
