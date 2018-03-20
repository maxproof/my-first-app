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
  /*template: `
    <app-server></app-server>
    <app-server></app-server>`,*/
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false; // disabled button

  serverCreationStatus = 'No server was created!';

  serverName = 'TestServer';

  serverCreated = false;

  servers = ['TestServer', 'TestServer2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created. Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    // console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
