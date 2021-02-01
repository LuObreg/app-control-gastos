import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { NewTransactionComponent } from './new-transaction/new-transaction.component';
import { BalanceComponent } from './balance/balance.component';

const routes: Routes = [ 
  { path: 'user', component: IndexComponent },
  { path: 'new', component: NewTransactionComponent },
  { path: 'balance', component: BalanceComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
