import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
    template: `
<nav><img [src]="titre"></nav>
  
`
  
    
})
export class HeaderComponent implements OnInit {
title = 'CryptoBaguette';
titre: string ='assets/titre_cb.png';


  constructor() { 
  
  }

  ngOnInit() {
  }

}
/*var myvar = document.createElement('img');
myvar.src = "titre_cb.png"*/