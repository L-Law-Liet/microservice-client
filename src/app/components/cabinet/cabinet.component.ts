import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.sass']
})
export class CabinetComponent implements OnInit {
  // @ts-ignore
  form: FormGroup;
  loading = true;
  profile: any;

  constructor(
    private fb: FormBuilder,
    private service: UserService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: '',
      phone: '',
      image: ''
    });
    this.getProfile()
  }
  getProfile() {
    this.service.getProfile(localStorage.getItem('id')).subscribe(
      res => {
        console.log(res)
        this.profile = res;
        this.loading = false
      }
    )
  }
}
