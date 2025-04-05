import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ToggleComponent } from '../toggle/toggle.component';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faUser,
  faShoppingCart,
  faBars,
  faSignOutAlt,
  faCog,
} from '@fortawesome/free-solid-svg-icons';
import { OverlayModule } from '@angular/cdk/overlay';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ToggleComponent, RouterLink, FontAwesomeModule, OverlayModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  faUser = faUser;
  faShoppingCart = faShoppingCart;
  faBars = faBars;
  faSignOutAlt = faSignOutAlt;
  faCog = faCog;

  isMobileMenuOpen = false;
  isOpenOverlayAvatar = false;
  isOpenOverlaySettings = false;

  cartItems = 3;

  logout() {
    // Lógica para cerrar sesión
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
