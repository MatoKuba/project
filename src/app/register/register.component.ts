import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../common/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = "";
  password: string = "";
  confirmPassword: string = "";

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.register(this.confirmPassword, this.username, this.password)
      .subscribe(() => {
        this.router.navigate(['/login']);
      });
  }
}
