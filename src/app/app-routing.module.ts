import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './components/items/items.component';
import { UserInputComponent } from './components/user-input/user-input.component';

const routes: Routes = [
  {path: '', component: UserInputComponent},
  {path: 'items', component: ItemsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
