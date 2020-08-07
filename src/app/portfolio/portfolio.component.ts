import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(private _router: Router, public auth: AuthService) { }

  logout(): void {
    this.auth.logout();
    this. _router.navigate(['/auth/login'], {queryParams: {loggedOut: 'success'}});
  }

  ngOnInit() {
  }

}
