import { Component } from '@angular/core';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { slideInAnimation } from './animations/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, HeaderComponent],
  animations: [
    slideInAnimation,
  ],
})
export class AppComponent {
  title = 'mi-blog-angular';

  constructor(private contexts: ChildrenOutletContexts) { }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
