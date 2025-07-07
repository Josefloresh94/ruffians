import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  imports: [],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FAQComponent {
  faqs = [
    {
      question: '¿Necesito hacer cita previa?',
      answer:
        'Recomendamos hacer cita previa para garantizar la atención sin tiempos de espera, pero también aceptamos clientes sin cita según disponibilidad.',
    },
    {
      question: '¿Cuánto tiempo dura un servicio completo?',
      answer:
        'Un servicio completo de corte y barba dura aproximadamente 45 minutos, aunque puede variar según las necesidades específicas de cada cliente.',
    },
    {
      question: '¿Qué métodos de pago aceptan?',
      answer:
        'Aceptamos efectivo, tarjetas de crédito/débito, transferencias bancarias y pagos móviles como Apple Pay y Google Pay.',
    },
    {
      question: '¿Tienen estacionamiento?',
      answer:
        'Todas nuestras sucursales cuentan con estacionamiento gratuito para clientes durante su servicio.',
    },
    {
      question: '¿Ofrecen servicios a domicilio?',
      answer:
        'Actualmente ofrecemos servicios a domicilio para eventos especiales como bodas o celebraciones. Contáctanos para más información.',
    },
    {
      question: '¿Puedo cancelar o reprogramar mi cita?',
      answer:
        'Sí, puedes cancelar o reprogramar tu cita hasta 2 horas antes de la hora programada sin ningún cargo adicional.',
    },
  ];
}
