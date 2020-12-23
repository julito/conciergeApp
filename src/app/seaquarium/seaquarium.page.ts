import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-seaquarium',
  templateUrl: './seaquarium.page.html',
  styleUrls: ['./seaquarium.page.scss'],
})
export class SeaquariumPage implements OnInit {

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
    this.servicio.producto_listado(this.buscar,'7')
    .subscribe((data: any)=>{
      console.log(data);
      this.productos = data;
      l.dismiss();
    },(error: any)=>{
      console.log(error);
      l.dismiss();
    });
  }

  detallesProducto(item: any){
    this.servicio.irA('/producto/'+item.id_producto);
  }
}
