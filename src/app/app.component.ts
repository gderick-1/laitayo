import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'laitayo';
  laitayo_validation = {
    'name': [{ 
      type: 'required', message: 'Full name is required'
    }],

    'email': [
      { type: 'required', message: 'Email is required'},
      { type: 'pattern', message: 'Enter a valid email'}
    ],

    'phone': [
      { type: 'required', message: 'Phone number is required'},
      { type: 'pattern', message: 'Enter a valid email'}
    ],
  }
  
}
