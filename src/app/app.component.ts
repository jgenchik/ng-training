import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { CalculatorService } from './shared/calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-training';
  dogImgSrc = 'https://www.thesprucepets.com/thmb/k3NXIqobAKvxoQ2ozGcwPxzIkpI=/3300x1856/smart/filters:no_upscale()/most-obedient-dog-breeds-4796922-hero-4440a0ccec0e42c98c5e58821fc9f165.jpg';

  constructor(public calcService: CalculatorService) {
    console.log('in constructor');
  }


  ngOnInit(): void {

    console.log('in ngOnInit');

    // setTimeout(() => {
    //   this.title = 'New title'
    // }, 3000);

    this.calcService.lastSum$.pipe(
      tap(sum => {
        console.log('Sum changed to ', sum);
      })
    ).subscribe();

  }


  changeTitle() {
    console.log('in changeTitle');
    this.title = 'New title '+Math.random();
    this.dogImgSrc = 'https://static8.depositphotos.com/1057741/1041/i/950/depositphotos_10415184-stock-photo-golden-retriever-dog-sitting-on.jpg';
  }

  add2to3() {
    const sum = this.calcService.add(2, 3);
    console.log('sum', sum);

  }

  add3to4() {
    const sum = this.calcService.add(3, 4);
    console.log('sum', sum);
  }


}
