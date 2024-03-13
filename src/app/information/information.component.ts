import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from '../Validators/noSpaceAllowed.validator';
import { FileUploadService } from '../services/file-upload.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrl: './information.component.css',
})
export class InformationComponent implements OnInit {
  currentPage: number = 1;
  receivedData: any;

  infoForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private fileUploadService: FileUploadService
  ) {
    this.fileUploadService.data$.subscribe((data) => {
      this.receivedData = data;
    });
  }

  ngOnInit() {
    this.infoForm = this.fb.group({
      firstName: this.fb.control(this.receivedData.firstName, [
        Validators.required,
        CustomValidators.noSpaceAllowed,
      ]),
      lastName: this.fb.control(this.receivedData.lastName, [
        Validators.required,
        CustomValidators.noSpaceAllowed,
      ]),
      mobile: this.fb.control(this.receivedData.mobile, [
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(11),
        CustomValidators.noSpaceAllowed,
      ]),
      nid: this.fb.control(this.receivedData.nid, [
        Validators.required,
        CustomValidators.noSpaceAllowed,
      ]),
      address: this.fb.control(this.receivedData.address, Validators.required),
      email: this.fb.control(this.receivedData.email, [
        Validators.required,
        Validators.email,
        CustomValidators.noSpaceAllowed,
      ]),
    });
  }

  keyPress(event: Event) {
    this.pageChange(4);
  }

  pageChange(page: number) {
    this.currentPage = page;
  }
  onSubmit() {
    console.log(this.infoForm.value);
  }
}
