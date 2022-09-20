import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  @Input() urlText: String = 'dsvbdsv';

  constructor() { }

  handleChange(event: any) {
    this.urlText = event.target.value
    console.log(this.urlText)
  }
  handleClick(event: any) {
    console.log(this.urlText)
  }

  ngOnInit(): void {
  }

}
