import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/modules/users/services/users.service';
import { AuthService } from '../../services/auth.service';
import { LoginCredentials } from 'src/app/models/login-credentials.model';
import { first } from 'rxjs';
import { UserDto } from 'src/app/models/user.dto';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public username?: string;
  public password?: string;
  public hide = true;
  public errorMessage?: string;
  public users!: Observable<UserDto[]>;

  constructor(
    private router: Router,
    private authService: AuthService,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.users = this.usersService.findAll();
  }

  public login(): void {
    const payload: LoginCredentials = {
      username: this.username!,
      password: this.password!,
    };

    this.authService
      .login(payload)
      .pipe(first())
      .subscribe({
        next: (response) => {
          localStorage.setItem('TOKEN', JSON.stringify(response.token));
        },
        error: (err) => {
          this.errorMessage = 'Credenciais inválidas. Tente novamente!';
        },
        complete: () => {
          this.router.navigate(['/users']);
        },
      });
  }
}
