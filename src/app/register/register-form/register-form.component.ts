import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  userForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {
    this.userForm = this.fb.group({
      username: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
      confirmPassword: [null, Validators.required],
      agreeToTerms: [false, Validators.requiredTrue]
    }, { validators: this.passwordMatchValidator() });
  }

  passwordMatchValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const password = control.get('password')?.value;
      const confirmPassword = control.get('confirmPassword')?.value;

      if (password !== confirmPassword) {
        control.get('confirmPassword')?.setErrors({ passwordsNotMatched: true });
      } else {
        control.get('confirmPassword')?.setErrors(null);
      }

      return null;
    };
  }

  submit() {
    if (this.userForm.valid) {
      // Form submission logic
    }
    this.router.navigate(["/login"])
  }
}
