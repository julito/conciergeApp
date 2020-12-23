import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ServiciosService } from '../servicios.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public productos: any[];
  public buscar: string ='';
  constructor(
    public servicio: ServiciosService,
    public route: ActivatedRoute,
    public loading: LoadingController

  ) { }

  async ngOnInit() {
    let l =await this.loading.create();
    l.present();
    l.dismiss();
  }

  cargarDireccion(direccion: string){
    this.servicio.irA('/'+direccion);
  }

}
