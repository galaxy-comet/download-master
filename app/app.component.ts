import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular 5';
  fileUrl;
  constructor(private sanitizer: DomSanitizer) {  }
  ngOnInit() {
   }

}
