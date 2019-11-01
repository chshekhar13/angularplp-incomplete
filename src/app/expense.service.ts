import {Expense} from '../model/Expense';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })

  export class ExpenseService{
      Expenses: Expense[]

      newExpense: Expense;
  // static newExpense: Expense;
 

      constructor(public http: HttpClient) {
        this.Expenses = []
      }
      // getExpenses() {
      //   return this.http.get<Expense[]>('http://localhost:8055/expensecodemodule/')
      // }
      getExpenseByCode(expense_code: number) {
        console.log(6)
        return this.http.get<Expense[]>('http://localhost:8055/expensecodemodule/'+6)
      }

  }


