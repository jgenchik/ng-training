import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  ctr = 0;
  ctr2 = 0;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.ctr = this.route.snapshot.queryParams['ctr'];

    this.route.queryParamMap.pipe(
      tap(() => console.log('changed')),
      tap(queryParams => {
        const ctr = queryParams.get('ctr');
        this.ctr2 = Number(queryParams.get('ctr'));
      })
    ).subscribe();

  }

  addToCounter() {

    this.ctr++;

    const newCtr = ++this.ctr2;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParamsHandling: 'merge',
      queryParams: { ctr: newCtr }
    });

  }

}
