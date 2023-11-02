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

  save(record: Partial<Product>){
    if(record.id){
      return this.update(record);
    }
    return this.create(record);
  }

  loadById(id: number) {
    return this.httpClient.get<Product>(`${this.API}/${id}`);
  }

  private create(record: Partial<Product>){
    return this.httpClient.post<Product>(this.API, record);
  }

  private update(record: Partial<Product>){
    return this.httpClient.put<Product>(`${this.API}/${record.id}`, record).pipe(first());
  }

  remove(id: number) {
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }
}
