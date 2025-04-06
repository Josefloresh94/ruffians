import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { ServicesComponent } from "./services/services.component";
import { TestimonialsComponent } from "./testimonials/testimonials.component";
import { CitaComponent } from "./cita/cita.component";

@Component({
  selector: 'app-home',
  imports: [HeroComponent, ServicesComponent, TestimonialsComponent, CitaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
