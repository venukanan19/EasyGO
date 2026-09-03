import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

  enquiry = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  sent = signal(false);

  submitForm(form: NgForm) {

    if (form.invalid) {
      return;
    }

    console.log('Enquiry submitted:', form.value);

    this.sent.set(true);

    form.resetForm();
  }

}