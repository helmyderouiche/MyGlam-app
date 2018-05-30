import { CapitalComponent } from './capital/capital.component';
import { CategorieService } from './categorie.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { ServiceComponent } from './service/service.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { ListComponent } from './list/list.component';
import { HeaderComponent } from './header/header.component';
import { HowitworkComponent } from './howitwork/howitwork.component';
import { MenuComponent } from './menu/menu.component';
import { FooterbgComponent } from './footerbg/footerbg.component';
import { FooterComponent } from './footer/footer.component';
import {
  MatButtonModule,
  MatToolbarModule,
  MatCardModule

} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
    HomeComponent,
    TestComponent,
    ListComponent,
    HeaderComponent,
    HowitworkComponent,
    MenuComponent,
    CapitalComponent,
    FooterbgComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    MDBBootstrapModule.forRoot(),
    MatButtonModule,
  MatToolbarModule,
  MatCardModule

  ],
  providers: [CategorieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
