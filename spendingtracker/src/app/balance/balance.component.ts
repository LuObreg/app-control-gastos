import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  balance = 0;

  constructor(private usersService: UsersService) { }

  async ngOnInit() {
    this.balance = await this.usersService.getBalance();
}

}
