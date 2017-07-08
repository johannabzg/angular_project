import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';

const appRoutes: Routes = [
  { path: 'lien_nav/1', component: TestComponent },
  { path: 'lien_nav/2', component: TestComponent },
  { path: 'lien_nav/3', component: TestComponent },
  { path: 'lien_nav/4', component: TestComponent },
  
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,  
    TestComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
