import { Component } from '@angular/core';
import { ExpenseService} from './expense.service';
import { Expense } from 'src/model/Expense';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  expense_code: number
  ExpenseService: ExpenseService

  counstructor(){
    //ExpenseService.newExpense = new Expense()
  }
  ABC() {
    console.log(6)
    console.log(this.expense_code)
   this.ExpenseService.getExpenseByCode(6).subscribe(data => this.ExpenseService.Expenses = data)
   //this.ExpenseService.getExpenses().subscribe(data => this.ExpenseService.Expenses = data)
  }
}

