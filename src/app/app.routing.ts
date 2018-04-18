import {Random1Component} from "./random1/random1.component";
import { Routes, RouterModule } from '@angular/router';
import {InfosComponent} from "./infos/infos.component";
import {LinearComponent} from "./linear/linear.component";
/**
 * Created by Andrei.Vasiliu on 4/17/2018.
 */

const MAINMENU_ROUTES: Routes = [
  {path: '', redirectTo: '/infos', pathMatch: 'full'},
  {path: 'random1' , component: Random1Component},
  {path: 'linear' , component: LinearComponent},
  {path: 'infos' , component: InfosComponent}

];
export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);
