import { Component, OnInit, Input } from '@angular/core';
import {Marca} from '../marca';
import {MarcaService} from '../marca.service';

@Component({
  selector: 'app-marca-list',
  templateUrl: './marca-list.component.html',
  styleUrls: ['./marca-list.component.css']
})
export class MarcaListComponent implements OnInit {

  constructor(private marcaService: MarcaService) { }
//

  @Input() marcas: Marca[];

  getMarcas(): void
  {
    this.marcaService.getMarcas().subscribe(marca => this.marcas = marca);
  }

  ngOnInit() {
    this.getMarcas();
  }

}