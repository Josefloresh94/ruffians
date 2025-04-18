import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MapComponent } from './map/map.component';
import { FAQComponent } from './faq/faq.component';
import { FormSocialMediaComponent } from './form-social-media/form-social-media.component';
import { SubsidiariesComponent } from './subsidiaries/subsidiaries.component';

@Component({
  selector: 'app-contact',
  imports: [MapComponent, FAQComponent, FormSocialMediaComponent, SubsidiariesComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {}
