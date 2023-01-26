import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Payment } from 'src/app/model/payment';
import { PaymentService } from 'src/app/shared/payment.service';
// import { ServiceService } from '../shared/service.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  listsPayment: Payment[] = []
  constructor(private paymentService : PaymentService, private breakpointObserver: BreakpointObserver) {}
  ngOnInit(): void {
    this.paymentService.getpayment().subscribe({
      next : payment => {
        this.listsPayment = payment
      }
    })
    
  }
}
