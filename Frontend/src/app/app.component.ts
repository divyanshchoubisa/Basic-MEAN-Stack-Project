import { Component } from '@angular/core';
import { BlogServicesService } from './Services/blog-services.service';
import {Blog} from '../app/Blog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
  
  }
  title = "Welcome To The Blog"
}
