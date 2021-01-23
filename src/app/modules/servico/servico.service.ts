import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Servico} from './servico';
import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  private apiServer = 'http://localhost:8080';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + btoa('admin' + ':' + 'admin')
    })
  };

  constructor(private httpClient: HttpClient, private snackBar: MatSnackBar) { }


  create(servico): Observable<Servico> {
    return this.httpClient.post<Servico>(this.apiServer + '/servicos/admin/post', JSON.stringify(servico), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  getAll(): Observable<Servico[]> {
    return this.httpClient.get<Servico[]>(this.apiServer + '/servicos/admin/get', this.httpOptions)
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

  showMessage(msg: string, isError: boolean = false):void{
    this.snackBar.open(msg, 'X',
      {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
        panelClass: isError ? ['msg-error'] : ['msg-sucess']
      }
    )
  }
}
