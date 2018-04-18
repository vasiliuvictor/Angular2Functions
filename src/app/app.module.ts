import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu.component';
import { Random1Component } from './random1/random1.component';
import {CONST_ROUTING} from "./app.routing";
import {SharedService} from "./shared.service";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InfosComponent } from './infos/infos.component';
import { LinearComponent } from './linear/linear.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    Random1Component,
    InfosComponent,
    LinearComponent
  ],
  imports: [
    BrowserModule,
    CONST_ROUTING,
    FormsModule,
    HttpModule,
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
