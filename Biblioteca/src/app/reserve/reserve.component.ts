import { Component } from '@angular/core';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})

export class ReserveComponent {
  showConfirmationModal = false;
  handleSubmit() {
    this.showConfirmationModal = true;
  }
  closeModal() {
    this.showConfirmationModal = true;
  }
}
