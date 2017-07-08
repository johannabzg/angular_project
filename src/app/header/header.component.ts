import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
    template: `
<nav><img [src]="titre">
<ul>
<li *ngFor="let lien_nav of liens"><a routerLink="/" routerLinkActive="active">{{lien_nav.name}}</a></li>
</ul>
</nav>
<router-outlet></router-outlet>
`
    
})
export class HeaderComponent implements OnInit {
title = 'CryptoBaguette';
titre: string ='assets/titre_cb.png';

liens = [
     new lien_nav( 1, 'lien1'),
     new lien_nav( 2, 'lien2'),
     new lien_nav( 3, 'lien3'),
     new lien_nav( 4, 'lien4'),
     new lien_nav( 5, 'lien5'),
];

  constructor() { 
  
  }

  ngOnInit() {
  }

}

export class lien_nav {
    constructor(
    public id: number,
    public name: string) {}
}



