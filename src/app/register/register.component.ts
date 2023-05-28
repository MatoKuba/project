import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LsnsServiceService } from '../services/lsns-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    public _service: LsnsServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      // Define form controls and their initial values and validators
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.email]],

      // ...
    });
  }
  onSubmit() {
    console.log(this.registerForm.value);
    this._service.registerUser(this.registerForm.value).subscribe((res) => {
      console.log(res, 'nw res');
      if (res) {
        this.router.navigate(['/login']);
      }
    });
  }
}
