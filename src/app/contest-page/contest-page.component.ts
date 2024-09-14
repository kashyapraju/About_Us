import { Component ,  OnInit} from '@angular/core';

@Component({
  selector: 'app-contest-page',
  standalone: true,
  imports: [],
  templateUrl: './contest-page.component.html',
  styleUrl: './contest-page.component.css'
})
export class ContestPageComponent implements OnInit{
  timeLeft: any = {};
  countdownInterval: any;

  targetDate = new Date().getTime() + 4 * 24 * 60 * 60 * 1000; // 4 days from now

  constructor() { }

  ngOnInit(): void {
    this.startCountdown();
  }

  startCountdown() {
    this.countdownInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = this.targetDate - now;

      // Time calculations for days, hours, minutes and seconds
      this.timeLeft = {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      };

      // If the countdown is over
      if (distance < 0) {
        clearInterval(this.countdownInterval);
        this.timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
    }, 1000);
  }
    
}
