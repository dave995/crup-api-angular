import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import {  shareReplay } from 'rxjs/operators';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: '', cols: 1, rows: 1 },
          { title: '', cols: 1, rows: 1 },
          { title: '', cols: 1, rows: 1 },
          { title: '', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: '', cols: 1, rows: 1 },
        { title: '', cols: 1, rows: 1 },
        { title: '', cols: 1, rows: 1 },
        { title: '', cols: 1, rows: 1 }
      ];
    })
  );
  isHandset$: Observable <boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
