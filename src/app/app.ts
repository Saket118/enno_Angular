import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Navbar } from './pages/navbar/navbar';
import { Header } from './pages/header/header';
import { Section1 } from './pages/section1/section1';
import { About } from "./pages/about/about";
import { Section2 } from "./pages/section2/section2";
import { Service } from "./pages/service/service";
import { Portfolio } from "./pages/portfolio/portfolio";
import { Newsletter } from "./pages/newsletter/newsletter";
import { Footer } from "./pages/footer/footer";
import { CallByAction } from "./pages/call-by-action/call-by-action";
import { Team } from "./pages/team/team";
import { Contact } from "./pages/contact/contact";

@Component({
  selector: 'app-root',
  imports: [Navbar, Header, Section1, About, Section2, Service, Portfolio, Newsletter, Footer, CallByAction, Team, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('enno');
}
