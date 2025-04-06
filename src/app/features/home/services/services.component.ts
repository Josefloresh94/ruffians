import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  imports: [RouterLink],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesComponent {
  services = [
    {
      id: 1,
      title: "Corte Clásico",
      description: "Corte tradicional con tijeras y máquina, incluye lavado y peinado.",
      price: "$15",
      image: "/placeholder.svg?height=300&width=400",
      link: "/servicios",
    },
    {
      id: 2,
      title: "Arreglo de Barba",
      description: "Perfilado y recorte de barba con navaja tradicional y productos premium.",
      price: "$12",
      image: "/placeholder.svg?height=300&width=400",
      link: "/servicios",
    },
    {
      id: 3,
      title: "Afeitado Tradicional",
      description: "Afeitado completo con navaja, toallas calientes y mascarilla facial.",
      price: "$18",
      image: "/placeholder.svg?height=300&width=400",
      link: "/servicios",
    },
    {
      id: 4,
      title: "Tratamiento Capilar",
      description: "Tratamiento hidratante para cabello y cuero cabelludo con productos naturales.",
      price: "$25",
      image: "/placeholder.svg?height=300&width=400",
      link: "/servicios",
    },
  ]
}
