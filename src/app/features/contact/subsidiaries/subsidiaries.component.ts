import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Location } from '@models/location';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronRight, faClock, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-subsidiaries',
  imports: [CommonModule, ReactiveFormsModule, RouterLink, FontAwesomeModule],
  templateUrl: './subsidiaries.component.html',
  styleUrl: './subsidiaries.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubsidiariesComponent implements OnInit{
  // Font Awesome icons
  faLocationDot = faLocationDot;
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faClock = faClock;
  faChevronRight = faChevronRight;

  // Location data
  locations: Location[] = [
    {
      id: 1,
      name: "BarberStyle Centro",
      address: "Calle Principal 123, Centro",
      phone: "(123) 456-7890",
      email: "centro@barberstyle.com",
      image: "/placeholder.svg?height=300&width=500",
      hours: ["Lunes a Viernes: 9:00 - 20:00", "Sábados: 9:00 - 18:00", "Domingos: Cerrado"],
      mapUrl: "https://maps.google.com/?q=Calle+Principal+123+Centro",
    },
    {
      id: 2,
      name: "BarberStyle Norte",
      address: "Av. del Norte 456, Zona Norte",
      phone: "(123) 456-7891",
      email: "norte@barberstyle.com",
      image: "/placeholder.svg?height=300&width=500",
      hours: ["Lunes a Viernes: 9:00 - 20:00", "Sábados: 9:00 - 18:00", "Domingos: Cerrado"],
      mapUrl: "https://maps.google.com/?q=Av+del+Norte+456+Zona+Norte",
    },
    {
      id: 3,
      name: "BarberStyle Sur",
      address: "Plaza Sur 789, Zona Sur",
      phone: "(123) 456-7892",
      email: "sur@barberstyle.com",
      image: "/placeholder.svg?height=300&width=500",
      hours: ["Lunes a Viernes: 10:00 - 21:00", "Sábados: 10:00 - 19:00", "Domingos: Cerrado"],
      mapUrl: "https://maps.google.com/?q=Plaza+Sur+789+Zona+Sur",
    },
  ];

  activeLocationId: number = 1;
  selectedLocation!: Location;

  ngOnInit() {
    this.updateActiveLocation();
  }

  updateActiveLocation() {
    this.selectedLocation = this.locations.find
    (location => location.id === this.activeLocationId) || this.locations[0];
  }
}
