import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

import { Product } from './../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly API = 'api/products';

  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<Product[]>(this.API)
    .pipe(
      delay(1000),
      tap(products => console.log(products))
      );
  }

  save(product: Product){
    return this.httpClient.post<Product>(this.API, product).pipe(first());
  }
}
