import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {
  public productos: any[];
  public buscar: string ='';
  public precio_pagar: number=0;
  public slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  public id: number = 0;
  constructor(
    public servicio: ServiciosService,
    public route: ActivatedRoute,
    public loading: LoadingController) 
   {
    this.id = this.route.snapshot.params.productoId ? this.route.snapshot.params.productoId : 0;
    console.log(this.id);
   }

  ngOnInit() {
    this.Cargar_Producto();
  }
  public slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true
   };
  async Cargar_Producto(){
    let l =await this.loading.create();
    l.present();
    this.servicio.get_producto(this.id)
    .subscribe((data: any)=>{
     
      this.productos = data;
      console.log(this.productos[0].ADULT);
      this.precio_pagar=this.productos[0].ADULT;
      l.dismiss();
    },(error: any)=>{
      console.log(error);
      l.dismiss();
    });
  }


}
