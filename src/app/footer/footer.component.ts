import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
        template: `
<p>{{title}}</p>`
})
export class FooterComponent implements OnInit {
  title = 'je suis un super footer !'
  constructor() { }

  ngOnInit() {
  }

}
