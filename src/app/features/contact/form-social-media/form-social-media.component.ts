import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Contact } from '@models/contact';
import { toast } from 'ngx-sonner';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-form-social-media',
  imports: [ReactiveFormsModule, FontAwesomeModule],
  templateUrl: './form-social-media.component.html',
  styleUrl: './form-social-media.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormSocialMediaComponent {
  private _formBuilder = inject(FormBuilder);

  faPaperPlane = faPaperPlane;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faTiktok = faTiktok;

  subjectOptions = [
    { value: '', label: 'Selecciona un asunto' },
    { value: 'cita', label: 'Información sobre citas' },
    { value: 'servicios', label: 'Información sobre servicios' },
    { value: 'productos', label: 'Información sobre productos' },
    { value: 'empleo', label: 'Oportunidad de empleo' },
    { value: 'otros', label: 'Otros' },
  ];

  form = this._formBuilder.group<Contact>({
    name: this._formBuilder.control('', Validators.required),
    email: this._formBuilder.control('', [
      Validators.email,
      Validators.required,
    ]),
    phone: this._formBuilder.control('', [
      Validators.minLength(8),
      Validators.required,
    ]),
    subject: this._formBuilder.control('', Validators.required),
    message: this._formBuilder.control('', [
      Validators.minLength(8),
      Validators.required,
    ]),
  });

  async submit() {
    if (this.form.invalid) return;

    try {
      const { name, email, phone, subject, message } = this.form.value;

      if (!name || !email || !phone || !subject || !message) return;

      await emailjs.send(
        'service_yq1nmij',
        'template_m1lefqv',
        this.form.value,
        { publicKey: '9n7O4Ix131Q2ZDLPi' }
      );

      toast.success('Correo enviado correctamente');
      this.form.reset();
    } catch (error) {
      console.error(
        'Error al enviar el formulario:',
        error as EmailJSResponseStatus
      );
    }
  }
}
