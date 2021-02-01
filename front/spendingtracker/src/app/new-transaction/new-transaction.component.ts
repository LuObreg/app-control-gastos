import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { TransactionsService } from '../transactions.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-new-transaction',
  templateUrl: './new-transaction.component.html',
  styleUrls: ['./new-transaction.component.css']
})
export class NewTransactionComponent implements OnInit {

  constructor( private transactionsService: TransactionsService, private usersService: UsersService, private router: Router) { }

  formAmount: any;
  formCategory: String;
  formIn_Out: String;
  user_id: any;
  alert_content = '';

  ngOnInit(): void {
  }

  async postTransaction() {
    let move = {
      amount: this.formAmount,
      category: this.formCategory,
      in_out: this.formIn_Out,
      user_id: this.usersService.id
    }

    /*if(move.amount < 0 || move.amount == undefined){
      let error = "Please insert a valid amount. ";
      this.alert_content += error;
    }
    if(move.category == undefined || move.category == ""){
      let error = "Please insert a category. ";
      this.alert_content += error;
    }
    if(move.in_out != "in" && move.in_out != "out"){
      let error = "Please insert a valid type of transaction. ";
      this.alert_content += error;
    }
    if(this.usersService.id == undefined || this.usersService.id == ""){
      let error = "Please select your user. ";
      this.alert_content += error;
    }

    console.log(this.alert_content);*/

    
    let postMove = false;
    postMove = await this.transactionsService.newTransactions(move);  
    console.log("booleano", postMove);
    if(postMove!= false){
      this.alert_content = 'Transaction saved.'; //LO RETORNA AUNQUE NO SE MANDE
    }

    return postMove;
  }

  clearAlert(){
    this.alert_content = '';
  }

  async updateBalance() {
    let response;
    let move = {
      amount: this.formAmount,
      category: this.formCategory,
      in_out: this.formIn_Out,
      user_id: this.usersService.id
    }
    console.log("objeto en update balance component: ", move);

    response = await this.transactionsService.updateBalance(move);
  }
  }




