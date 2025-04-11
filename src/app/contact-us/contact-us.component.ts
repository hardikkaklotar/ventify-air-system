import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import emailjs from 'emailjs-com';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';



@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, ToastModule],
  templateUrl: './contact-us.component.html',
  providers: [MessageService]
})
export class ContactUsComponent {
  userForm!: FormGroup;
  isSubmitting = false;
  topicHasError = false;
  submitted = false;  
  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService
  ){}

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      to_name: ['admin'],
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  /* FORM VALIDATION AFTER SUBMIT SEND EMAIL */
  async send() {
    this.submitted = true;
    this.userForm.markAllAsTouched();
    if (this.userForm.invalid) {
    } else {
      emailjs.init('quGx09KTSLnH8HrZ3');
      try {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'From submitted' });
        let response = await emailjs.send("service_nb4718u", "template_fc7fcbn", {
          name: this.userForm.value.name,
          to_name: this.userForm.value.to_name,
          email: this.userForm.value.email,
          phone: this.userForm.value.phone,
          message: this.userForm.value.message,
        });
        this.userForm.reset();
        Object.keys(this.userForm.controls).forEach(key => {
          this.userForm.get(key)?.setErrors(null);
        });
        this.userForm.reset();
        this.submitted = false;
      } catch (error) {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to submit form. Please try again' });
      }
    }
  }
}
