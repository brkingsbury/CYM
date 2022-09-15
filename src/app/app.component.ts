import { AfterViewInit, Component } from '@angular/core';
import * as feather from 'feather-icons';
// import { currentOfferings } from './app.offerings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit() {
    feather.replace();
  }
}
