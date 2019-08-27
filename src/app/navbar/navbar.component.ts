import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  faPaperPlane = faPaperPlane;


  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
