import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-appointment-history',
  imports: [],
  templateUrl: './appointment-history.component.html',
  styleUrl: './appointment-history.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppointmentHistoryComponent {}
