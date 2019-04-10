

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PuntoVentaListComponent} from '../punto-venta/punto-venta-list/punto-venta-list.component';
import {PuntoVentaDetailComponent} from '../punto-venta/punto-venta-detail/punto-venta-detail.component';
import{PuntoVentaCreateComponent} from '../punto-venta/punto-venta-create/punto-venta-create.component';

const routes: Routes = [
  {
    path: 'punto-venta',
    children:[
      {
        path: 'list',
        component: PuntoVentaListComponent
      },
       {
        path: ':id',
        component: PuntoVentaDetailComponent
      }     

    ]
  }
]
@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
  ],
  declarations: [],
  exports:[RouterModule]
})
export class AppRoutingModule { }