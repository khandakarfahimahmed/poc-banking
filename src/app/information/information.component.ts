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
  source!: string | Blob;
  showName: boolean = false;
  showContact: boolean = false;
  showNid: boolean = false;
  showEmail: boolean = false;
  showPermanentAddress: boolean = false;

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
    this.source = '/assets/sample.pdf';
    this.infoForm = this.fb.group({
      firstName: this.fb.control(this.receivedData.firstName || 'Mehedi', {
        validators: [Validators.required, CustomValidators.noSpaceAllowed],
      }),
      lastName: this.fb.control(this.receivedData.lastName || 'Hossain', [
        Validators.required,
        CustomValidators.noSpaceAllowed,
      ]),
      mobile: this.fb.control(this.receivedData.mobile || '01711111111', [
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(11),
        CustomValidators.noSpaceAllowed,
      ]),
      nid: this.fb.control(this.receivedData.nid || '1234567890', [
        Validators.required,
        CustomValidators.noSpaceAllowed,
      ]),
      address: this.fb.control(
        this.receivedData.address || 'Dhaka',
        Validators.required
      ),
      email: this.fb.control(this.receivedData.email || 'fahim@123', [
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
  toggleName(val: boolean): void {
    this.showName = !val;
  }
  toggleContact(val: boolean): void {
    this.showContact = !val;
  }
  toggleNid(val: boolean): void {
    this.showNid = !val;
  }
  toggleEmail(val: boolean): void {
    this.showEmail = !val;
  }
  togglePermanentAddress(val: boolean): void {
    this.showPermanentAddress = !val;
  }
}
