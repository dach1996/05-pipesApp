import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicPageComponent } from './pages/basic-page/basic-page.component';
import { NumberPageComponent } from './pages/number-page/number-page.component';
import { CommonPageComponent } from './pages/common-page/common-page.component';
import { OrderComponent } from './pages/order/order.component';

const routes: Routes = [{
  path: '',
  component: BasicPageComponent
},
{
  path: 'numbers',
  component: NumberPageComponent
},
{
  path: 'uncommon',
  component: CommonPageComponent
},
{
  path: 'custom',
  component: OrderComponent
},
{
  path: '**',
  component: BasicPageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
