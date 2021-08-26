import { Component, OnInit } from '@angular/core';
import { faBell, faCog } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  settingsIcon = faCog;
  notificationIcon = faBell;
  
  constructor() { }

  ngOnInit(): void {
  }

}
