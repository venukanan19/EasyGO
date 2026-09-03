import { Component, signal } from '@angular/core';
import { ProductService } from '../../services/product-service';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import {
  emailsMatch,
  notBlank,
  phoneValidator
} from '../../validators/form-validators';

@Component({
  selector: 'app-checkout',
  imports: [ReactiveFormsModule],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css'
})
export class Checkout {

  checkoutForm: FormGroup;

  submitted = signal(false);
placedOrder = signal<any>(null);

  constructor(
  private fb: FormBuilder,
  private productService: ProductService) 
  {

    this.checkoutForm = this.fb.group({

      // Customer Details
      customer: this.fb.group({

        name: ['', [
          Validators.required,
          Validators.minLength(3),
          notBlank()
        ]],

        email: ['', [
          Validators.required,
          Validators.email
        ]],

        confirmEmail: ['', [
          Validators.required
        ]],

        phone: ['', [
          Validators.required,
          phoneValidator()
        ]]

      }, {
        validators: [emailsMatch]
      }),

      // Delivery Address
      address: this.fb.group({

        city: ['', [
          Validators.required,
          notBlank()
        ]],

        line1: ['', [
          Validators.required,
          notBlank()
        ]],

        postcode: ['', [
          Validators.required,
          Validators.pattern(/^[0-9]{5}$/)
        ]]

      }),

      // Extra Delivery Contacts
      extraContacts: this.fb.array([]),

      // Optional Notes
      notes: ['']

    });
  }

  // Customer FormGroup
  get customer(): FormGroup {
    return this.checkoutForm.get('customer') as FormGroup;
  }

  // Address FormGroup
  get address(): FormGroup {
    return this.checkoutForm.get('address') as FormGroup;
  }

  get extraContacts(): FormArray {
  return this.checkoutForm.get('extraContacts') as FormArray;
}

addContact() {
  this.extraContacts.push(
    this.fb.group({
      name: ['', Validators.required],
      phone: ['', [
        Validators.required,
        phoneValidator()
      ]]
    })
  );
}

removeContact(index: number) {
  this.extraContacts.removeAt(index);
}

placeOrder() {
  this.submitted.set(true);

  if (this.checkoutForm.invalid) {
    this.checkoutForm.markAllAsTouched();
    return;
  }

  console.log('Order placed:', this.checkoutForm.value);

  this.placedOrder.set(this.checkoutForm.value);
  this.productService.clearCart();

  this.checkoutForm.reset();

  this.extraContacts.clear();

  this.submitted.set(false);
}

}