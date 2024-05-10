// src/app/recipes/recipes.component.ts
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RecipeDialogComponent } from '../recipe-dialog/recipe-dialog.component';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent {
  recipes = [
    { name: 'Chocolate Chip Cookies', imageUrl: 'assets/choc_chip_cookies.jpg', description: 'Ingredients: Flour, sugar, chocolate chips, butter, eggs, vanilla. Description: Classic cookies with gooey chocolate chips and a golden edge.' },
    { name: 'Oatmeal Raisin Cookies', imageUrl: 'assets/oatmeal_raisin_cookies.jpg', description: 'Ingredients: Oats, raisins, flour, butter, eggs, cinnamon. Description: Chewy cookies with sweet raisins and a hint of cinnamon.' },
    { name: 'Macadamia Nut Cookies', imageUrl: 'assets/macadamia_nut_cookies.jpg', description: 'Ingredients: Macadamia nuts, white chocolate chips, flour, butter, sugar. Description: Crunchy cookies with rich macadamia nuts and creamy white chocolate.' },
    { name: 'Peanut Butter Cookies', imageUrl: 'assets/peanut_butter_cookies.jpg', description: 'Ingredients: Peanut butter, flour, sugar, eggs. Description: Rich and nutty cookies with a classic crisscross pattern.' },
    { name: 'Sugar Cookies', imageUrl: 'assets/sugar_cookies.jpg', description: 'Ingredients: Flour, sugar, butter, eggs, vanilla. Description: Sweet and buttery, perfect for decorating with icing and sprinkles.' },
    { name: 'Snickerdoodle Cookies', imageUrl: 'assets/snickerdoodle_cookies.jpg', description: 'Ingredients: Flour, cream of tartar, cinnamon, sugar, butter. Description: Soft cookies rolled in cinnamon sugar with a crisp exterior.' },
    { name: 'Lemon Crinkle Cookies', imageUrl: 'assets/lemon_crinkle_cookies.jpg', description: 'Ingredients: Lemon zest, lemon juice, flour, sugar, butter. Description: Light and fluffy with a tangy lemon flavor and powdered sugar dusting.' },
    { name: 'Almond Joy Cookies', imageUrl: 'assets/almond_joy_cookies.jpg', description: 'Ingredients: Coconut, almonds, chocolate chips, condensed milk. Description: Decadent cookies inspired by the Almond Joy candy bar.' }

  ];

  constructor(public dialog: MatDialog) { }

  openDialog(recipe: any): void {
    const dialogRef = this.dialog.open(RecipeDialogComponent, {
      width: '500px',
      data: recipe
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
