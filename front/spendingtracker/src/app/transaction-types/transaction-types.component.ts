import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { TransactionsService } from '../transactions.service';

@Component({
  selector: 'app-transaction-types',
  templateUrl: './transaction-types.component.html',
  styleUrls: ['./transaction-types.component.css']
})
export class TransactionTypesComponent implements OnInit {

  constructor( private usersService: UsersService, private transactionsService: TransactionsService) { }
  transactions: any;
  id: any;
  removed: any;
  type: String;
  user_id = this.usersService.id;

  ngOnInit(): void{}

  async listTransactionsType(type){
    this.type = type;
    console.log(this.type);
  this.transactions = await this.transactionsService.listTransactionsType(this.type, this.user_id);
  console.log("transacciones: ", this.transactions);}


    editField: string;


    updateList(id: number, property: string, event: any) {
      const editField = event.target.textContent;
      this.transactions[id][property] = editField;
    }

    async removeTransaction(id) {
      this.removed = await this.transactionsService.removeTransaction(id);
      //this.transactions.splice(id, 1)--> no es este id, ver;
    }

    changeValue(id: number, property: string, event: any) {
      this.editField = event.target.textContent;
    }
}
