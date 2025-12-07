import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="container footer-content">
        <div class="copyright">
          © 2024 Daonik. Разработано с намерением.
        </div>
        <div class="social-links">
          <a href="#" class="social-link">Instagram</a>
          <a href="#" class="social-link">Twitter</a>
          <a href="#" class="social-link">LinkedIn</a>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      padding: 3rem 0;
      margin-top: 5rem;
      border-top: 1px solid var(--color-border);
      background: white;
    }
    
    .footer-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }
    
    @media (min-width: 768px) {
      .footer-content {
        flex-direction: row;
        justify-content: space-between;
      }
    }
    
    .copyright {
      font-size: 0.875rem;
      color: var(--color-text-light);
      font-weight: 300;
    }
    
    .social-links {
      display: flex;
      gap: 2rem;
    }
    
    .social-link {
      font-size: 0.875rem;
      color: var(--color-text-light);
      transition: color 0.2s ease;
    }
    
    .social-link:hover {
      color: var(--color-stone-800);
    }
  `]
})
export class FooterComponent {}
