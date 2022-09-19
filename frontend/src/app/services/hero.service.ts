import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable, tap } from 'rxjs';
import { Injectable } from '@angular/core'; // at top

type Hero = {
    'id': number,
}

@Injectable({
    providedIn: 'root' // just before your class
})
export class HeroService {
    constructor(
        private http: HttpClient,
        private messageService: MessageService) { }

    /** Log a HeroService message with the MessageService */
    private log(message: string) {
        this.messageService.add(`HeroService: ${message}`);
    }

    private heroesUrl = 'http://localhost:3000/login';  // URL to web api


    username: string = '';
    password: string = '';

    login(username: string, password: string) {
        
        this.username = username;
        this.password = password;
        this.callApi()
    }

    callApi() {
        console.log('hero clicked')
        const data = { 'username': this.username, 'password': this.password }
        return this.http.post(this.heroesUrl, data)
            .pipe(
                tap(data => console.log('fetched heroes', data))
            );
    }
}