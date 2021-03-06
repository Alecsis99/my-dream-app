import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new  EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A new recipe', 'The best recipe ever', '../../../assets/images/recipe_1.jpg'),
    new Recipe('A new recipe', 'The best recipe ever', '../../../assets/images/recipe_2.jpg'),
    new Recipe('A new recipe', 'The best recipe ever', '../../../assets/images/recipe_3.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
