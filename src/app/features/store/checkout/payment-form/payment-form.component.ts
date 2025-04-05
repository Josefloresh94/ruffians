import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-payment-form',
  imports: [],
  templateUrl: './payment-form.component.html',
  styleUrl: './payment-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentFormComponent {}
