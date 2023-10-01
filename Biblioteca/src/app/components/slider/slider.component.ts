import { Component } from '@angular/core';
import Swiper from 'swiper';
import { MatDialog } from '@angular/material/dialog';
import { ReserveComponent } from '../../reserve/reserve.component';
import { ApiService } from 'src/app/components/services/api.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent {

  data: any [] = [];

  constructor(public _dialog: MatDialog, private apiService: ApiService) {
  }
  
  OpenReserve() {
    const searchModal = this._dialog.open(ReserveComponent, {
      disableClose: true,
    });
    searchModal.beforeClosed();
  }
  
  ngOnInit(): void {
    this.llenatData();
  } 

  llenatData(){
    this.apiService.getData().subscribe(data => {
      this.data = data;
      console.log(data);
      
    })
  }

}
