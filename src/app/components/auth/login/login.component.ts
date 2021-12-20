import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  // @ts-ignore
  form: FormGroup;
  hide = true;

  constructor(private service: UserService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: '',
      password: '',
    });
  }
  login(): void{
    this.form.disable();
    // this.service.user().subscribe(res => {
    //   console.log(res);
    // });
    this.service.login(this.form.getRawValue()).subscribe(
      res => {
        console.log(res, res.headers.get('Authorization'));
        localStorage.setItem('token', res.headers.get('Authorization'));
        this.service.getUserIdByToken().subscribe(
          res1 => {
            localStorage.setItem('id', res1);
            this.router.navigate(['/cabinet']);
          },
          error => {
            console.log(error);
          }
        );
      },
      error => {
        console.log(error);
        alert('Error')
        this.form.enable();
      }
    );
  }
}
