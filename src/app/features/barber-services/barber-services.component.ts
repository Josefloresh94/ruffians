import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCheck,
  faClock,
  faScissors,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-barber-services',
  imports: [FontAwesomeModule],
  templateUrl: './barber-services.component.html',
  styleUrl: './barber-services.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BarberServicesComponent {
  faCheck = faCheck;
  faClock = faClock;
  faScissors = faScissors;

  services = [
    {
      id: 1,
      name: 'Corte Clásico',
      description:
        'Un corte tradicional que nunca pasa de moda. Incluye lavado, corte y peinado profesional.',
      price: '$15',
      duration: '30 min',
      image: '/placeholder.svg?height=400&width=600',
      features: [
        'Consulta personalizada',
        'Lavado con productos premium',
        'Corte con técnicas clásicas',
        'Peinado final',
        'Acabado con productos de calidad',
      ],
    },
    {
      id: 2,
      name: 'Arreglo de Barba',
      description:
        'Dale forma y estilo a tu barba con nuestro servicio especializado de arreglo y perfilado.',
      price: '$12',
      duration: '20 min',
      image: '/placeholder.svg?height=400&width=600',
      features: [
        'Perfilado profesional',
        'Recorte y definición',
        'Aplicación de aceites especiales',
        'Afeitado de líneas',
        'Hidratación final',
      ],
    },
    {
      id: 3,
      name: 'Afeitado Tradicional',
      description:
        'Experimenta el ritual del afeitado clásico con navaja y toallas calientes.',
      price: '$18',
      duration: '30 min',
      image: '/placeholder.svg?height=400&width=600',
      features: [
        'Preparación con toalla caliente',
        'Aplicación de pre-afeitado',
        'Afeitado con navaja tradicional',
        'Masaje facial',
        'Aplicación de after shave',
      ],
    },
    {
      id: 4,
      name: 'Corte + Barba',
      description:
        'Servicio completo que incluye corte de cabello y arreglo de barba para un look impecable.',
      price: '$25',
      duration: '45 min',
      image: '/placeholder.svg?height=400&width=600',
      features: [
        'Corte de cabello personalizado',
        'Arreglo completo de barba',
        'Lavado profesional',
        'Peinado y acabado',
        'Productos premium incluidos',
      ],
    },
    {
      id: 5,
      name: 'Tratamiento Capilar',
      description:
        'Revitaliza tu cabello con nuestro tratamiento especializado para un cabello más saludable.',
      price: '$25',
      duration: '40 min',
      image: '/placeholder.svg?height=400&width=600',
      features: [
        'Diagnóstico capilar',
        'Tratamiento personalizado',
        'Masaje craneal',
        'Hidratación profunda',
        'Consejos de cuidado en casa',
      ],
    },
    {
      id: 6,
      name: 'Corte Fade',
      description:
        'Corte moderno con degradado perfecto, ideal para un look contemporáneo y elegante.',
      price: '$18',
      duration: '35 min',
      image: '/placeholder.svg?height=400&width=600',
      features: [
        'Degradado personalizado',
        'Definición de líneas',
        'Lavado profesional',
        'Peinado y acabado',
        'Productos de styling incluidos',
      ],
    },
  ];
}
