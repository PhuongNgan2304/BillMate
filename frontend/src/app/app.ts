import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SplashScreenComponent } from './splash-screen/splash-screen';
import { HomeScreen } from './home-screen/home-screen';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SplashService } from './splash.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  logoSrc = 'assets/logo-invomate2-removebg.png';
  showSplash = true;
  logoInCorner = false;
  animateLogo = true;

  constructor(private router: Router) { }

  ngOnInit() {
    if (this.router.url === '/') {
      //Bắt đầu splash screen
      setTimeout(() => {
        //this.animateLogo = true;
        //this.logoInCorner = true;
      }, 0);

      setTimeout(() => {
        this.logoInCorner = true;
      }, 2500);

      // Chuyển trang + đổi logo
      setTimeout(() => {
        this.animateLogo = false;
        this.logoSrc = 'assets/logo-invomate2-removebg.png';
        this.router.navigate(['/home']);
      }, 2500);
    }
  }

}

