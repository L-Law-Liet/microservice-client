import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  loading = true;
  // @ts-ignore
  router: Router;
  categories: [];
  // @ts-ignore
  constructor(private router: Router,
              public auth: UserService) {
    this.router = router;
    this.categories = [];
  }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void{
    this.loading = false;
  }

  logout(){
    this.auth.logout();
  }

}
