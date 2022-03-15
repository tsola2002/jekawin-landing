import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jekawin-landing';
  days: number = 7;
  hours: number = 57;
  mins: number = 42;
  secs: number = 4;

  ngOnInit() {
    // this.countDownTimer();
  }

  x = setInterval(() => {
    var futureDate = new Date("May 15, 2022 15:34:24").getTime(); //WAT time by converting it to millisecond 
    var today = new Date().getTime();  //we get todays date by converting it to millisecond
    var distance = futureDate - today;
    this.days = Math.floor(distance / (1000 * 60 * 60 * 24)); // 20days 22hours 59mins
    this.hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    this.mins = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
    this.secs = Math.floor(distance % (1000 * 60) / (1000));
    // console.log(this.hours);
    if (distance < 0) {
      clearInterval(this.x);
    }
  }, 1000)

  countDownTimer() {
    var futureDate = new Date("Apr 15, 2022 15:34:24").getTime(); //WAT time by converting it to millisecond 
    var today = new Date().getTime();  //we get todays date by converting it to millisecond
    var distance = futureDate - today;
    this.days = Math.floor(distance / (1000 * 60 * 60 * 24)); // 20days 22hours 59mins
    this.hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    this.mins = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
    this.secs = Math.floor(distance % (1000 * 60) / (1000));
    console.log(this.hours);
  }

  subscribeForm = new FormGroup({
    email: new FormControl('', [Validators.required])
  })

  formSubmit(form: FormGroup): void {
    const { email } = form.value;
    console.log("EMAIL VALUE:", email);
  }

}
