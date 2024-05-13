import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.scss']
})
export class LoginuserComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  loginForm!: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    });
  }

  login() {
    this.authService.loginService(this.loginForm.value).subscribe({
      next: (res) => {
        console.log("Login is success!", res); // Affichez la réponse pour le débogage
        localStorage.setItem("user_id", res._id); // Assurez-vous que `_id` est correctement défini dans la réponse
        this.authService.isLoggedIn$.next(true);
        this.router.navigate(['/']); // Redirigez vers la page d'accueil
        this.loginForm.reset();
      },
      error: (err) => {
        console.error("Login error:", err); // Affichez l'erreur pour le débogage
        alert("Invalid email or password."); // Affichez un message d'erreur générique
      }
    });
  }
  
}  
