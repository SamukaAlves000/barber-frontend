import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Funcionario} from './funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  // Produção
  // private apiServer = 'https://barbearia-backend.herokuapp.com';
  // Desenvolvimento
  private apiServer = 'http://localhost:8080';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + btoa('admin' + ':' + 'admin')
    })
  };

  constructor(private httpClient: HttpClient, private snackBar: MatSnackBar) { }

  getAll(): Observable<Funcionario[]> {
    return this.httpClient.get<Funcionario[]>(this.apiServer + '/funcionarios/admin', this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  getById(id): Observable<Funcionario> {
    return this.httpClient.get<Funcionario>(this.apiServer + '/funcionarios/admin/' + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  create(funcionario): Observable<Funcionario> {
    return this.httpClient.post<Funcionario>(this.apiServer + '/funcionarios/admin', JSON.stringify(funcionario), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  update(funcionario): Observable<Funcionario> {
    return this.httpClient.put<Funcionario>(this.apiServer + '/funcionarios/admin', JSON.stringify(funcionario), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  delete(id){
    return this.httpClient.delete<Funcionario>(this.apiServer + '/funcionarios/admin/' + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  showMessage(msg: string, isError: boolean = false): void{
    this.snackBar.open(msg, 'X',
      {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'bottom',
        panelClass: isError ? ['msg-error'] : ['msg-sucess']
      }
    );
  }
}
