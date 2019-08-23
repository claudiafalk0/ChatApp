import { Component, OnInit } from '@angular/core';
import {AuthService} from "@src/app/auth/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'WooChat';

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.localAuthSetup();
  }
}
