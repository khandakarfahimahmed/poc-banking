import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrl: './information.component.css',
})
export class InformationComponent implements OnInit {
  key: string = '';
  currentPage: number = 1;
  infoForm!: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.infoForm = this.fb.group({
      firstName: this.fb.control('Mehedi', Validators.required),
      lastName: this.fb.control('Hasan', Validators.required),
      mobile: this.fb.control('01785519804', [
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(11),
      ]),
      nid: this.fb.control('5555995116', Validators.required),
      address: this.fb.control('Muradnagar,Cumilla', Validators.required),
      email: this.fb.control('mehedisasm@gmail.com', [
        Validators.required,
        Validators.email,
      ]),
    });
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.key = event.key;
    console.log(this.key);
    if (event.key === 't') {
      // event.preventDefault();
      this.pageChange(4);
      console.log(this.key);
    }
  }
  pageChange(page: number) {
    this.currentPage = page;
  }
  onSubmit() {
    console.log(this.infoForm.value);
  }
}
