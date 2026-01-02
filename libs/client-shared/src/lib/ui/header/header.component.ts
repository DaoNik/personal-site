import { ChangeDetectionStrategy, Component } from '@angular/core';

import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideAngularModule, Menu, X } from 'lucide-angular';

@Component({
  selector: 'lib-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, LucideAngularModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  readonly MenuIcon = Menu;
  readonly XIcon = X;
  mobileOpen = false;
  readonly navLinks = [
    { path: '/work', label: 'Работы' },
    { path: '/blog', label: 'Блог' },
    { path: '/notes', label: 'Статьи' },
    { path: '/about', label: 'О себе' },
  ];

  toggleMobile() {
    this.mobileOpen = !this.mobileOpen;
  }

  closeMobile() {
    this.mobileOpen = false;
  }
}
