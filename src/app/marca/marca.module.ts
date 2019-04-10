import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarcaService } from './marca.service';
import { MarcaListComponent } from './marca-list/marca-list.component';
import { MarcaDetailComponent } from './marca-detail/marca-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MarcaListComponent, MarcaDetailComponent],
  providers: [MarcaService]
})
export class MarcaModule { }