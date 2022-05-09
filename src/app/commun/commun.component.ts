import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commun',
  templateUrl: './commun.component.html',
  styleUrls: ['./commun.component.scss']
})
export class CommunComponent implements OnInit {
  title = 'admin-panel-layout';
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
