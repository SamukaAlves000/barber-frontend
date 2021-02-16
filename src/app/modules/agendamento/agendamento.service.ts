import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Agendamento} from './agendamento';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

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

  getAll(): Observable<Agendamento[]> {
    return this.httpClient.get<Agendamento[]>(this.apiServer + '/agendamentos/admin', this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  getAllStatus(status): Observable<Agendamento[]> {
    return this.httpClient.get<Agendamento[]>(this.apiServer + '/agendamentos/admin/status?status=' + status, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  getById(id): Observable<Agendamento> {
    return this.httpClient.get<Agendamento>(this.apiServer + '/agendamentos/admin/' + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  create(agendamento): Observable<Agendamento> {
    return this.httpClient.post<Agendamento>(this.apiServer + '/agendamentos/admin', JSON.stringify(agendamento), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  update(agendamento): Observable<Agendamento> {
    return this.httpClient.put<Agendamento>(this.apiServer + '/agendamentos/admin', JSON.stringify(agendamento), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  delete(id){
    return this.httpClient.delete<Agendamento>(this.apiServer + '/agendamentos/admin/' + id, this.httpOptions)
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
