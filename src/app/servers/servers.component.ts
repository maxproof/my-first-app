import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // tslint:disable-next-line:component-selector
  // by attribute:
  /*selector: '[app-servers]',*/
  // by class
  // tslint:disable-next-line:component-selector
  /*selector: '.app-servers',*/
  /*templateUrl: './servers.component.html',*/
  /*template: '<app-server></app-server><app-server></app-server>',*/
  template: `
    <app-server></app-server>
    <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
