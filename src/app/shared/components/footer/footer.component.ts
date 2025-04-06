import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faSquareFacebook,
  faInstagram,
  faSquareXTwitter,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-footer',
  imports: [FontAwesomeModule, DatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  faSquareFacebook = faSquareFacebook;
  faInstagram = faInstagram;
  faSquareXTwitter = faSquareXTwitter;
  faWhatsapp = faWhatsapp;

  today: number = Date.now();
}
