import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
providedIn: 'root'
})
export class ContactService {
url: string = 'http://localhost:3000/send';
constructor(private httpClient: HttpClient) { }

  sendContacts(messageContent: any) {
    return this.httpClient.post(this.url,
    JSON.stringify(messageContent),
    { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' });
  }
}


