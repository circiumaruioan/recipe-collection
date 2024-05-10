// src/app/recipes/recipe-dialog/recipe-dialog.component.ts
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-recipe-dialog',
  templateUrl: './recipe-dialog.component.html'
})
export class RecipeDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
}
