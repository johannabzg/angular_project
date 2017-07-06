import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
    template: `
<nav><h1>{{title}}</h1></nav>`
    
})
export class HeaderComponent implements OnInit {
title = 'CryptoBaguette';
  constructor() { 
  
  }

  ngOnInit() {
  }

}
