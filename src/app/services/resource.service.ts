import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ResourceService {
  private NotesLocalUrl: string = "/assets/json/notes.json";  

  constructor(private http: HttpClient) { }

  public getNotes(): Observable<any> {
    const url: string = this.NotesLocalUrl;
    return this.http.get<any>(url).pipe();
}
}


