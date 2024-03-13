import { Component } from '@angular/core';
import { FileUploadService } from '../services/file-upload.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {
  name: string = '';
  email: string = '';
  phone: string = '';
  address: string = '';

  receivedData: any;

  constructor(private fileUploadService: FileUploadService) {
    this.fileUploadService.data$.subscribe((data) => {
      this.receivedData = data;
      this.name =
        this.receivedData.firstName + ' ' + this.receivedData.lastName;
      this.email = this.receivedData.email;
      this.phone = this.receivedData.mobile;
      this.address = this.receivedData.address;
    });
  }
}
