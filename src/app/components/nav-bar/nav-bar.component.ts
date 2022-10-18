import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['../../app.component.css','./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  getUrl(): string {
    // console.log(this.router.url)
    return this.router.url;
  }

}
