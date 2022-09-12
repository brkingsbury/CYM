import { AfterViewInit, Component } from '@angular/core';
import * as feather from 'feather-icons';

@Component({
  selector: 'top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements AfterViewInit {
  public menuExpanded = false;

  collapseMenu() {
    this.menuExpanded = false;
  }

  ngAfterViewInit() {
    feather.replace();
  }}
