import { Component, OnInit, Input } from '@angular/core';
import { WebRequestService } from 'src/app/web-request.service';
import { HttpClient } from '@angular/common/http'
import { Observable, tap } from 'rxjs';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() username: string = '';
  @Input() password: string = '';

  constructor(private http: HttpClient, private _heroService: HeroService) { }

  handleUsername(event: any) {
    this.username = event.target.value
    console.log(this.username)
  }
  
  handlePassword(event: any) {
    this.password = event.target.value
    console.log(this.password)
  }

  login(event: any) {
    event.preventDefault()
    this._heroService.login(this.username, this.password)
  }

  ngOnInit() {
    this._heroService.callApi().subscribe({
      next: data =>{
        console.log(data)
      }
    })
  }

}
