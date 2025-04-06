import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialsComponent {
  testimonials = [
    {
      id: 1,
      name: "Carlos Rodríguez",
      role: "Cliente desde 2018",
      content:
        "La mejor barbería de la ciudad. El servicio es excelente y siempre salgo satisfecho con mi corte. Los barberos son verdaderos profesionales.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "Miguel Ángel",
      role: "Cliente desde 2020",
      content:
        "Ambiente agradable y atención personalizada. Me encanta que se toman el tiempo para entender exactamente lo que quiero. Totalmente recomendado.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      name: "Javier Méndez",
      role: "Cliente desde 2019",
      content:
        "Excelente relación calidad-precio. Los productos que utilizan son de primera calidad y el resultado siempre es impecable.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  ]
}
