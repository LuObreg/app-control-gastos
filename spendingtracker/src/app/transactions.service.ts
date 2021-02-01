import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { UsersService } from './users.service';


@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  url = environment.url + "/transaction";

  constructor(private usersService: UsersService, private http: HttpClient) { }
  id: any;
  user_id = this.usersService.id;
  amount: any;

  async listTransactions(id){
    try {
      let response: any;
      response = await this.http.get(this.url+'/'+id).toPromise();

      return response;
    } catch (error) {
      console.error(error);
    }
  }

  async listTransactionsType(in_out, id){
    try {
      let response: any;
      response = await this.http.get(this.url+'/'+id+'/'+in_out).toPromise();
      console.log(response);

      return response;
    } catch (error) {
      console.error(error);
    }
  }

  async newTransactions(move){
    try {
      let transaction = {
        amount: move.amount,
        category: move.category,
        in_out: move.in_out,
        user_id: this.user_id
      }
      this.amount = transaction.amount;
      let response;
      response = await this.http.post(this.url, transaction).toPromise();
      return response;
    } 

    catch (error) {
      console.error(error);
    }
  }
  
    async updateBalance(move){
      try{
        let response: any;
        let newBalance: any;
        newBalance = {
          user_id: move.user_id,
          amount: move.amount,
          in_out: move.in_out
        }
        if(newBalance.in_out == "out"){
          newBalance.amount = 0 - newBalance.amount
        }

        console.log("lo que recibo en el servicio: ", newBalance);
        response = await this.http.put(environment.url + "/users", newBalance).toPromise();
        console.log(response);
        return response;
      }
      catch (error) {
        console.error(error);
      }
    }

  async modifyTransaction(transaction){
    try{
      console.log(transaction);
      transaction = {
        id: transaction.id,
        amount: transaction.amount,
        category: transaction.category
      };
      let response: any;
      response = await this.http.put(this.url+"/", transaction.id, transaction.amount.transaction.category).toPromise();
    }
    catch (error) {
      console.error(error);
    }
  }
  async removeTransaction(id){
    try{
      let response: any;
      response = await this.http.delete(this.url+"/"+this.user_id+"/"+id).toPromise();
      console.log(response);
      return response;
    }
    catch{

    }
  }
}
