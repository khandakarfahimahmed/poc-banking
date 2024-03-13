import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../Validators/noSpaceAllowed.validator';
import { FileUploadService } from '../services/file-upload.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  step = 1;
  applicationForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private fileUploadService: FileUploadService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.applicationForm = this.fb.group({
      firstName: this.fb.control('Mehedi', [
        Validators.required,
        CustomValidators.noSpaceAllowed,
      ]),
      lastName: this.fb.control('Hasan', [
        Validators.required,
        CustomValidators.noSpaceAllowed,
      ]),
      mobile: this.fb.control('01785519804', [
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(11),
        CustomValidators.noSpaceAllowed,
      ]),
      nid: this.fb.control('5555995116', [
        Validators.required,
        CustomValidators.noSpaceAllowed,
      ]),
      address: this.fb.control('Muradnagar,Cumilla', Validators.required),
      email: this.fb.control('mehedisasm@gmail.com', [
        Validators.required,
        Validators.email,
        CustomValidators.noSpaceAllowed,
      ]),
    });
  }

  nextStepControl() {
    this.step++;
  }
  prevStepControl() {
    this.step--;
  }
  onSubmit() {
    console.log(this.applicationForm.value);
    const { firstName, lastName, mobile, nid, address, email } =
      this.applicationForm.value;
    console.log(firstName, lastName, mobile, nid, address, email);
    this.fileUploadService.sendData({
      firstName,
      lastName,
      mobile,
      nid,
      address,
      email,
    });
    this.step++;
    this.router.navigate(['/userlist']);
  }
}
