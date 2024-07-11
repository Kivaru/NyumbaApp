import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <main>
      <header class="brand-name">
        <img style="width:40px;height:40px" class="brand-logo" src="./assets/logo.svg" alt="logo" aria-hidden="true" />
      </header>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  imports: [RouterOutlet, HomeComponent, RouterModule],
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'NyumbaApp';
}
