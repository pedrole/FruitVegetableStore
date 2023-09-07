import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService, private route: ActivatedRoute,
    private router: Router ) {

  }
  ngOnInit(): void {
    const currentPath = this.route.snapshot?.routeConfig?.path;

    this.productService.getProducts().subscribe(products => {
      if (currentPath == 'sale')
        this.products = products.filter(p => p.isOnSale)
      else if (currentPath == 'fruits')
        this.products = products.filter(p => p.category == 'Fruit')
      else if (currentPath == 'vegetables')
        this.products = products.filter(p => p.category == 'Vegetable')
    });
  }

  onCardClick(id: number): void {
    
 

    this.router.navigate(['/product', id]);
    // You can perform any desired actions here
  }



}
