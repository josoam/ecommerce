import { Component,EventEmitter, Input, OnInit ,Output } from '@angular/core';
import{ShoppingCartService}from 'src/app/SERVICES/shopping-cart.service';
5
@Component({
  selector: 'app-checkout-products',
  templateUrl: './checkout-products.component.html',
  styleUrls: ['./checkout-products.component.css']
})
export class CheckoutProductsComponent implements OnInit {
  @Input() checkout_products:any[];
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter()
  constructor(public shopping_cart_service: ShoppingCartService) { }

  ngOnInit(): void {
    
    console.log('products',this.checkout_products)
  }
  removeItem(p:any){
    this.shopping_cart_service.removerItem(p)
    this.deleteEvent.emit(p)
  }
  remove(p:any){
    this.shopping_cart_service.remove(p)
  }

}
