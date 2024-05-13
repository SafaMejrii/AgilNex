import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { confirmPasswordValidator } from '../../validators/confirm-password-validator';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm !: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService, 
    private router: Router
  ) { }

  ngOnInit(): void {
    // Initialisation du formulaire
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      role: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validator: confirmPasswordValidator('password', 'confirmPassword')
    });
  }

  register() {
    this.authService.registerService(this.registerForm.value)
      .subscribe({
        next: (res) => {
          alert("User Created!");
          this.registerForm.reset();
          this.router.navigate(['loginuser']);
        },
        error: (err) => {
          console.log(err);
        }
      });
  }
}
