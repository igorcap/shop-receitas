import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Receita nome Test","Desc Test","https://farm2.staticflickr.com/1010/1245756055_d28e7058d9.jpg")
  ];

  constructor() { }

  ngOnInit() {
  }

}