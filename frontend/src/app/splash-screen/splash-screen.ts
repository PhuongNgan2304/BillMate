import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-splash-screen',
  standalone: true,
  imports: [],
  templateUrl: './splash-screen.html',
  styleUrls: ['./splash-screen.css']
})
export class SplashScreenComponent implements OnInit {
  animateLogo = false;

  constructor(private router: Router) {}

  ngOnInit():void {
    setTimeout(() => {
      this.animateLogo = true;
    }, 2500);

    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 3000); 
  }
}