import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Pessoa} from './pessoa';
import {Servico} from '../servico/servico';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private apiServer = 'http://localhost:8080';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + btoa('admin' + ':' + 'admin')
    })
  };

  constructor(private httpClient: HttpClient, private snackBar: MatSnackBar) { }

  getAll(): Observable<Pessoa[]> {
    return this.httpClient.get<Pessoa[]>(this.apiServer + '/pessoas/admin', this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  getById(id): Observable<Pessoa> {
    return this.httpClient.get<Pessoa>(this.apiServer + '/pessoas/admin/' + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  create(pessoa): Observable<Pessoa> {
    return this.httpClient.post<Pessoa>(this.apiServer + '/pessoas/admin', JSON.stringify(pessoa), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  update(pessoa): Observable<Pessoa> {
    return this.httpClient.put<Pessoa>(this.apiServer + '/pessoas/admin', JSON.stringify(pessoa), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  delete(id){
    return this.httpClient.delete<Pessoa>(this.apiServer + '/pessoas/admin/' + id, this.httpOptions)
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
