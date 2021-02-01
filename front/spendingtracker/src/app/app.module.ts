import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IndexComponent } from './index/index.component';
import { UserInComponent } from './user-in/user-in.component';
import { TransactionsListComponent } from './transactions-list/transactions-list.component';
import { BalanceComponent } from './balance/balance.component';
import { NewTransactionComponent } from './new-transaction/new-transaction.component';
import { TransactionTypesComponent } from './transaction-types/transaction-types.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    UserInComponent,
    TransactionsListComponent,
    BalanceComponent,
    NewTransactionComponent,
    TransactionTypesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
