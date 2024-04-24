import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { timeout } from 'rxjs';
import { DummyDragDrop } from '../interfaces/drag-drop.interface';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }


  getDragDrop() {

    return this.http
    .get<DummyDragDrop[]>(`${environment.API_URL}/dragdrop`)
    .pipe(timeout(environment.REQUEST_TIMEOUT_MS))
  }
}
