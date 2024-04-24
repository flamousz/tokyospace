import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment, isProduction } from '../environment/environment';
import { timeout } from 'rxjs';
import { DummyDragDrop } from '../interfaces/drag-drop.interface';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  apiUrl: string = ''

  constructor(private http: HttpClient) {
    isProduction ? this.apiUrl = environment.API_PROD : this.apiUrl = environment.API_URL
  }


  getDragDrop() {

    return this.http
    .get<DummyDragDrop[]>(`${this.apiUrl}/dragdrop`)
    .pipe(timeout(environment.REQUEST_TIMEOUT_MS))
  }
}
