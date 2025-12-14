import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideAngularModule, Menu, X } from 'lucide-angular';

@Component({
  selector: 'lib-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, LucideAngularModule],
  template: `
    <nav class="header">
      <div class="container header-content">
        <a routerLink="/" class="logo">Daonik</a>

        <div class="nav-items">
          <a routerLink="/work" routerLinkActive="active" class="nav-link"
            >Работы</a
          >
          <a routerLink="/blog" routerLinkActive="active" class="nav-link"
            >Блог</a
          >
          <a routerLink="/notes" routerLinkActive="active" class="nav-link"
            >Статьи</a
          >
          <a routerLink="/about" routerLinkActive="active" class="nav-link"
            >О себе</a
          >
          <button class="btn-natural btn-primary">Связаться</button>
        </div>

        <button class="mobile-menu-btn" (click)="toggleMobile()">
          <lucide-angular
            [img]="mobileOpen ? XIcon : MenuIcon"
            [size]="24"
          ></lucide-angular>
        </button>
      </div>

      <div class="mobile-nav" *ngIf="mobileOpen">
        <a
          routerLink="/work"
          routerLinkActive="active"
          class="mobile-link"
          (click)="mobileOpen = false"
          >Работы</a
        >
        <a
          routerLink="/blog"
          routerLinkActive="active"
          class="mobile-link"
          (click)="mobileOpen = false"
          >Блог</a
        >
        <a
          routerLink="/notes"
          routerLinkActive="active"
          class="mobile-link"
          (click)="mobileOpen = false"
          >Статьи</a
        >
        <a
          routerLink="/about"
          routerLinkActive="active"
          class="mobile-link"
          (click)="mobileOpen = false"
          >О себе</a
        >
        <button class="btn-natural btn-primary mobile-cta">Связаться</button>
      </div>
    </nav>
  `,
  styles: [
    `
      .header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 50;
        background: rgba(250, 250, 249, 0.95);
        backdrop-filter: blur(12px);
        border-bottom: 1px solid rgba(231, 229, 228, 0.5);
      }

      .header-content {
        height: 6rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .logo {
        font-family: var(--font-serif);
        font-size: 1.5rem;
        letter-spacing: -0.02em;
        color: var(--color-stone-800);
        transition: color 0.2s ease;
      }

      .logo:hover {
        color: var(--color-text-light);
      }

      .nav-items {
        display: none;
        align-items: center;
        gap: 2.5rem;
      }

      @media (min-width: 768px) {
        .nav-items {
          display: flex;
        }
        .mobile-menu-btn {
          display: none;
        }
      }

      .mobile-menu-btn {
        background: none;
        border: none;
        cursor: pointer;
        color: var(--color-stone-800);
        padding: 0.5rem;
      }

      .mobile-nav {
        display: flex;
        flex-direction: column;
        padding: 1rem 1.5rem 2rem;
        gap: 1rem;
        border-top: 1px solid var(--color-border);
      }

      @media (min-width: 768px) {
        .mobile-nav {
          display: none;
        }
      }

      .mobile-link {
        font-size: 1.125rem;
        color: var(--color-text);
        padding: 0.75rem 0;
        border-bottom: 1px solid var(--color-border);
      }

      .mobile-link.active {
        color: var(--color-stone-800);
        font-weight: 500;
      }

      .mobile-cta {
        margin-top: 1rem;
        width: 100%;
      }
    `,
  ],
})
export class HeaderComponent {
  readonly MenuIcon = Menu;
  readonly XIcon = X;
  mobileOpen = false;

  toggleMobile() {
    this.mobileOpen = !this.mobileOpen;
  }
}
