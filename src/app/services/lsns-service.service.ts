import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LsnsServiceService {
  constructor(private _httpClient: HttpClient) {}

  registerUser(obj: any) {
    const url = `http://localhost:8080/api/users?password=${obj.password}&email=${obj.email}&lastName=${obj.lastName}&firstName=${obj.firstName}`;
    const payload = {
      password: '123',
      email: 'sa@sa.com',
      lastName: 'sa',
      firstName: 'sa',
    };

    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    // Make the POST request
    return this._httpClient.post(url, { headers });
  }

  getUsers() {
    const url = `http://localhost:8080/api/users`;

    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    // Make the POST request
    return this._httpClient.get(url, { headers });
  }
}
