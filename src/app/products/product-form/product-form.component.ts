import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { ProductsService } from '../services/products.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  form!: FormGroup;

  constructor(private formBuilder: NonNullableFormBuilder,
    private service: ProductsService,
    private route: ActivatedRoute,
    private location: Location,
    private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    const product: Product = this.route.snapshot.data['product'];
    this.form = this.formBuilder.group({
      id: [product.id],
      name: [product.name],
      barCode: [product.barCode],
      price: [product.price]
    })
  }

  onSubmit() {
    this.service.save(this.form.value).subscribe(result => this.onSuccess(), error => {
      this.onError();
    });
  }

  onCancel() {
    this.location.back();
  }

  private onSuccess() {
    this.snackBar.open("Produto cadastrado com sucesso!.", '', { duration: 5000 });
    this.location.back();
  }

  private onError() {
    this.snackBar.open("Erro ao salvar o produto.", '', { duration: 5000 });
  }
}
