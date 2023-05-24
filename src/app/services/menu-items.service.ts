import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuItemsService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) { }
  getMenuItems(): any {
    return this.http.post('https://demo-functions-v001.azurewebsites.net/api/menuitems', {"name": "menu-items"}, this.httpOptions);
  }
}
