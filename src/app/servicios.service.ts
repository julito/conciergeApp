import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
private URL_API: string ='https://conciergehotline.net/appconcierge/';
  constructor(
    private router: Router,
    private http: HttpClient
    
    ) { }

  irA(url: string){
    this.router.navigateByUrl(url);
  }

  producto_listado(texto: string='',cate:string='')
  {
    
   return this.http.post(this.URL_API+'productos',this.objectToFormData({buscar:texto,categoria:cate}));
  }

  get_producto(idP: number=0)
  {
    
   return this.http.post(this.URL_API+'productos/getProducto',this.objectToFormData({id:idP}));
  }


  objectToFormData(obj: any, form?: any, namespace?: any) {
    let fd: any = form || new FormData();
    let formKey: any;
    for (let property in obj) {
      if (obj.hasOwnProperty(property) && obj[property]) {
        if (namespace) {
          formKey = namespace + '[' + property + ']';
        } else {
          formKey = property;
        }
        if (obj[property] instanceof Date) {
          fd.append(formKey, obj[property].toISOString());
        }
        if (typeof obj[property] === 'object' && !(obj[property] instanceof File)) {
          this.objectToFormData(obj[property], fd, formKey);
        } else {
          fd.append(formKey, obj[property]);
        }

      }
    }
    return fd;
  };

}

