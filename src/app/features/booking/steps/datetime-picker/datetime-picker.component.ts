import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-datetime-picker',
  imports: [],
  templateUrl: './datetime-picker.component.html',
  styleUrl: './datetime-picker.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatetimePickerComponent {}
