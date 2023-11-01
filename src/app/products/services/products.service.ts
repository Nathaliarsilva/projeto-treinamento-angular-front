import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { delay, tap } from 'rxjs';

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
}
