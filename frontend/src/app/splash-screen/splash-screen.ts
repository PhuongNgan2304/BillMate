import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-splash-screen',
  standalone: true,
  imports: [],
  templateUrl: './splash-screen.html',
  styleUrls: ['./splash-screen.css']
})
export class SplashScreenComponent implements OnInit {
  isHidden = false;

  ngOnInit():void {
    setTimeout(() => {
      this.isHidden = true;
    }, 3000); // Hide after 3 seconds
  }
}