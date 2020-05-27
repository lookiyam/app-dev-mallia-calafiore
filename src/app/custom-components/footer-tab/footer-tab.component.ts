import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-footer-tab',
  templateUrl: './footer-tab.component.html',
  styleUrls: ['./footer-tab.component.scss'],
})
export class FooterTabComponent implements OnInit {

  constructor(
    // added public location in order to redirect the page backward through the back button in html
    public location: Location
  ) { }

  ngOnInit() {}

}
