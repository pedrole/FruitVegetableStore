import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  product?: Product;

  constructor(private activatedRoute: ActivatedRoute, private service: ProductService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');


    this.service.getProductById(parseInt(id || '0')).subscribe(product => {
      this.product = product;
    })

  }

}
