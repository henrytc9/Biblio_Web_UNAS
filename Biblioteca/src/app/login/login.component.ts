import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    console.log("el componente de inicio de sesion se a cargado")
  }

  async onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    const data = this.loginForm.value;

    try {
      const response = await fetch(`http://servicio-biblioteca-unas.rj.r.appspot.com/genius/api/usuario/login/${data.username}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const userData = await response.json();

        if (userData.passwordUsuario === data.password) {
          // Autenticación exitosa, redirigir a otra página
          this.router.navigate(['/home']);
        } else {
          // Mostrar mensaje de error
        }
      } else {
        // Mostrar mensaje de error
      }
    } catch (error) {
      console.error('Error al comunicarse con la API:', error);
    }
  }
}
