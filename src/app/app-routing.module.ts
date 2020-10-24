import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';


const routes: Routes = [{
  path: "",
  pathMatch: "full",
  redirectTo: "/home"
},{
  path: "home",
  component: HomeComponent
},{
  path: "product",
  component: ProductComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
