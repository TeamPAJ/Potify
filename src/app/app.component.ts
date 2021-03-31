import { Component } from '@angular/core';
import { Navbar } from './navbar/navbar.component';
import { GlobalService } from './services/global.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [HttpClient]
})
export class AppComponent {
  title = 'Potify';
}
