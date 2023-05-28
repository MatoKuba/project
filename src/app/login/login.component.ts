import { Component, OnInit } from '@angular/core';
import { LsnsServiceService } from '../services/lsns-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    public _service: LsnsServiceService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      // Define form controls and their initial values and validators

      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.email]],

      // ...
    });
  }
  ngOnInit() {}
  loginRes: any;
  onLogin() {
    this._service.getUsers().subscribe((res) => {
      console.log(res, 'get users');
      this.loginRes = res;
      var validity = this.loginRes.filter((x: any) => {
        return (
          x.email == this.loginForm.value.email &&
          x.password == this.loginForm.value.password
        );
      });
      console.log(validity, 'valid');

      if (validity.length != 0) {
        console.log('hello');
        localStorage.setItem('uid', validity[0].id);
        localStorage.setItem('FirstName', validity[0].firstName);
        localStorage.setItem('LastName', validity[0].lastName);

        this.router.navigate(['/message']);
      } else {
        alert('wrong username or password');
      }
    });
  }
}
