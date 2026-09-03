import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function phoneValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {

    const value = control.value ?? '';

    return /^[0-9]{10}$/.test(value)
      ? null
      : { phone: true };
  };
  
}

export function notBlank(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {

    const value = control.value ?? '';

    return value.trim().length > 0
      ? null
      : { notBlank: true };
  };
}

export const emailsMatch: ValidatorFn = (
  group: AbstractControl
): ValidationErrors | null => {

  const email = group.get('email')?.value;
  const confirmEmail = group.get('confirmEmail')?.value;

  return email === confirmEmail
    ? null
    : { emailsMismatch: true };
};