import { Component } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertServise } from '../components/services/alert.service';
import { SliderComponent } from '../components/slider/slider.component';
import { modalService } from '../components/services/modal.service';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})

export class ReserveComponent {
  
  formReserve: FormGroup;
  status = true;

  // Declarar las variables aquí para que estén disponibles en todo el componente
  area: string = '';
  autor: string = '';
  cantidad: number = 0;
  codigo: string = '';
  idDocumento: number = 0;
  nombre: string = '';
  tipo_documento: string = '';
  urlImg: string = '';

  constructor(
    public _dialogRef: MatDialogRef<SliderComponent>,
    private _fb: FormBuilder,
    private alertService: AlertServise,
    private serviceModal: modalService
  ) {

    this.formReserve = this._fb.group({
      title: ['Programacion', Validators.required],
      author: ['Alexander Cane', Validators.required],
      area: ['Informática', Validators.required],
      codigoLibro: ['xsxs', Validators.required],
      fechaReserva: ['', Validators.required],
      state: ['Disponible', Validators.required],
      urlImagen: ['../assets/img/img_1.jpg'],
    });

  }

  public nuevaData: Array<any> =[];

  ngOnInit(): void {
    this.serviceModal.enviaInfo.subscribe(Data => {
      this.nuevaData.push(Data);
      console.log(this.nuevaData);

      // Extraer las variables del último objeto agregado a nuevaData
      const ultimoObjeto = this.nuevaData[this.nuevaData.length - 1];
  
      if (ultimoObjeto && ultimoObjeto.Data) {
        this.area = ultimoObjeto.Data.area;
        this.autor = ultimoObjeto.Data.autor;
        this.cantidad = ultimoObjeto.Data.cantidad;
        this.codigo = ultimoObjeto.Data.codigo;
        this.idDocumento = ultimoObjeto.Data.idDocumento;
        this.nombre = ultimoObjeto.Data.nombre;
        this.tipo_documento = ultimoObjeto.Data.tipo_documento;
        this.urlImg = ultimoObjeto.Data.urlImg;
        console.log('Esta es area: ', this.area);
  
        // Ahora, las variables contienen los valores del último objeto agregado a nuevaData
        console.log("Variables extraídas:", this.area, this.autor, this.cantidad, this.codigo, this.idDocumento, this.nombre, this.tipo_documento, this.urlImg);
      }
    })

  } 
  
  sendReserve(){
    if(this.formReserve.invalid){
      this.status=false;
    }else{
      this.alertService.showAlert('Envio exitoso!');
      this._dialogRef.close();
    }
  }

}
