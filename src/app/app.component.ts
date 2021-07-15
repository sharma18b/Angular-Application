// import { Component } from '@angular/core';


import { Component } from "@angular/core";

// @Component({
//   selector: 'pm-root',
//   templateUrl: './app.component.html', 
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'Angular: Getting Started';
// }

@Component(
  {
    selector : 'pm-root',
    templateUrl : './app.component.html',
    styleUrls:['./app.component.css']
  }
)
export class AppComponent{
  title = 'Angular getting Started';

}