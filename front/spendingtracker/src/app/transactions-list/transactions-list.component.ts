import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../transactions.service';
import { UsersService } from '../users.service'

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.css']
})
export class TransactionsListComponent implements OnInit {


  constructor(private transactionsService: TransactionsService, private usersService: UsersService) { }
  transactions = [];
  id: any;

  async ngOnInit() {
    this.id = this.usersService.id;
    this.transactions = await this.transactionsService.listTransactions(this.id);

  }
}
