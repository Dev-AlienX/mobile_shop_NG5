import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';     // Add this
import { SecendComponent } from './secend/secend.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { from } from 'rxjs';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'secend',
    component: SecendComponent
  },
  {
    path: 'checkout',
    component: CheckOutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
