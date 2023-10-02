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
      codigoLibro: ['xsxs',Validators.required],
      fechaReserva: ['',Validators.required],
      state: ['Disponiblle', Validators.required],
      urlImagen: ['../assets/img/img_1.jpg'],
    });

  }

  public nuevaData: any [] = [];

  ngOnInit(): void {
    this.serviceModal.enviaInfo.subscribe(data => {
      console.log(data);
      this.nuevaData.push(data);
      console.log(this.nuevaData);
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

  libro = {
  
    disponible: true,
    titulo: 'Programación para principiantes',
    autor: 'Alexander Cane',
    area: 'Informática',
    codigo: 'LIB0001UNAS',
    edicion: 'Primera edición',
    fechaReserva: '01/01/2023' 
  };
}
