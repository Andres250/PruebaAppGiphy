import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  get historial(){

    return this.gifsSvc.historial;

  }

  constructor(private gifsSvc: GifsService) { }

  ngOnInit(): void {
  }

  buscar(termino:string){

    this.gifsSvc.buscarGifs(termino);

  }

}
