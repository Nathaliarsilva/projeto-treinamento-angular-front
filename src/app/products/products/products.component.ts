import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { Product } from '../model/product';
import { ProductsService } from './../services/products.service';
import { DialogErrorComponent } from 'src/app/components/dialog-error/dialog-error/dialog-error.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmationDialogComponent } from 'src/app/components/confirmation-dialog/confirmation-dialog/confirmation-dialog.component';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products$: Observable<Product[]> | null = null;
  displayedColumns = ['name', 'barCode', 'price', 'actions'];

  constructor(private productsService: ProductsService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar) {
    this.refresh();
  }

  onError(errorMsg: string) {
    this.dialog.open(DialogErrorComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void { }

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onEdit(product: Product) {
    this.router.navigate(['edit', product.id], { relativeTo: this.route });
  }

  onDelete(product: Product) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: 'Relmente quer remover esse produto?',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.productsService.remove(product.id).subscribe(
          () => {
            this.refresh();
            this.snackBar.open('Curso removido com sucesso!', 'X', {
              duration: 5000,
              verticalPosition: 'top',
              horizontalPosition: 'center'
            });
          },
          () => this.onError('Erro ao tentar remover curso.')
        );
      }
    });
  }

  refresh() {
    this.products$ = this.productsService.list()
      .pipe(
        catchError(error => {
          this.onError('Erro ao carregar os produtos.')
          return of([])
        })
      )
  }
}
