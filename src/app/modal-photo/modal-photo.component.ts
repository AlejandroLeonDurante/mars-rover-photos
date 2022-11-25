import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-photo',
  templateUrl: './modal-photo.component.html',
  styleUrls: ['./modal-photo.component.css']
})
export class ModalPhotoComponent {
  @Input() isModalOpen = false;
  @Input() applyShowClass = false;
  @Input() selectedImgScr = '';
  @Output() closeModalEvent = new EventEmitter();

  closeModal() {
    this.closeModalEvent.emit();
  }

}
