import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { FormProductComponent } from './components/form-product/form-product.component';


const routes: Routes = [
  { path: '', component: ListProductsComponent },
  { path: 'create', component: FormProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
