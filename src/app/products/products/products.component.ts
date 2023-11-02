import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { Product } from '../model/product';
import { ProductsService } from './../services/products.service';
import { DialogErrorComponent } from 'src/app/dialog-error/dialog-error/dialog-error.component';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{

  products$: Observable<Product[]>;
  displayedColumns = ['name', 'barCode', 'price', 'actions'];

  constructor(private productsService: ProductsService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute) {
    this.products$ = this.productsService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar os produtos.')
        return of([])})
    )
  }

  onError(errorMsg: string){
    this.dialog.open(DialogErrorComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void { }

  onAdd(){
    this.router.navigate(['new'],{relativeTo:this.route});
  }
}
