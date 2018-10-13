import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService {

    constructor(private http: HttpClient) {}

    attemptAuth(ussername: string, password: string): Observable<any> {
        const credentials = {username: ussername, password : password};
        console.log('attempt :: ');
        console.log(ussername + password);
        return this.http.post<any>('http://localhost:8080/token/generate-token',
        credentials);
    }
}
