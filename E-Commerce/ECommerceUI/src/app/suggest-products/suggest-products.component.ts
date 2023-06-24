import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../models/models';
@Component({
  selector: 'app-suggest-products',
  templateUrl: './suggest-products.component.html',
  styleUrls: ['./suggest-products.component.css']
})
export class SuggestProductsComponent implements OnInit{
  @Input() category: Category = {
    id: 0,
    category:'',
    subcategory:'',
  };

@Input() count: number = 3;

constructor(){}

ngOnInit(): void{}

}
