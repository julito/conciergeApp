import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.page.html',
  styleUrls: ['./tours.page.scss'],
})
export class ToursPage implements OnInit {
  public productos: any[];
  public buscar: string ='';
  constructor(
    public servicio: ServiciosService,
    public route: ActivatedRoute,
    public loading: LoadingController) { }

  ngOnInit() {
    this.Cargar_Productos();
  }
  async Cargar_Productos(){
    let l =await this.loading.create();
    l.present();
    this.servicio.producto_listado(this.buscar)
    .subscribe((data: any)=>{
      console.log(data);
      this.productos = data;
      l.dismiss();
    },(error: any)=>{
      l.dismiss();
    });
  }

  detallesProducto(item: any){
    this.servicio.irA('/producto/'+item.id_producto);
  }

}
