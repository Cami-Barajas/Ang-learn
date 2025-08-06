import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrbsComponent } from './components/prbs/prbs.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PrbsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyFirstAng';
  text = 'this is how to use a compononet in angular from visual studio with their documentation'
}
