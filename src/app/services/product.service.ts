import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { of } from 'rxjs'
import { Product } from 'src/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products : Product[]=  [
    {  id: 1234, name: 'Fair trade Banana', unity: "kg", price: 0.88, isOrganic: false, country: "Brazil", isOnSale: true ,
    category:"Fruit"},
    {  id: 1235, name: 'Organic Apple', unity: "Kg", price: 1.55 , isOrganic: true, country: "Argentina", isOnSale: true ,
    category:"Fruit"},
    {  id: 1236, name: 'Mango Brazil', unity: "Piece", price: 1.55 , isOrganic: false, country: "Brazil", isOnSale: false ,
    category:"Fruit"},
    {  id: 1236, name: 'Onions', unity: "Kg", price: 0.90 , isOrganic: false, country: "Brazil", isOnSale: true ,
    category:"Vegetable"},
    {  id: 1236, name: 'Portuguese Tomato', unity: "Kg", price: 1.45 , isOrganic: false, country: "Portugal", isOnSale: false ,
    category:"Vegetable"},
    {  id: 1236, name: 'Organic Lettuce', unity: "Head", price: 0.19 , isOrganic: true, country: "United States", isOnSale: false ,
    category:"Vegetable"},
   
  ]

  constructor (private http: HttpClient) {}

  getProducts (): Observable<Product[]> {
    return of(this.products)
  }

  getProductById(id:number):Observable<Product >{
   let product = this.products.find(p => p.id === id)
   if(product)
    return of(product)
  throw new Error("Product not found");
    
  }
}
