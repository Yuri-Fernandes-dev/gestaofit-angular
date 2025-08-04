import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { NotificationService } from '../../../services/notification.service';

export interface Plan {
  id: string;
  name: string;
  price: number;
  period: 'monthly' | 'yearly';
  features: string[];
  popular?: boolean;
  recommended?: boolean;
}

@Component({
  selector: 'app-layout-upgrade',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="upgrade-container">
      <div class="container py-5">
        <div class="text-center mb-5">
          <h1 class="display-4 fw-bold text-primary mb-3">Escolha seu Plano</h1>
          <p class="lead text-muted">Desbloqueie todo o potencial do GestãoFit</p>
        </div>

        <div class="row justify-content-center">
          <div class="col-lg-4 col-md-6 mb-4" *ngFor="let plan of plans">
            <div class="card h-100 plan-card" [class.popular]="plan.popular">
              <div class="card-body p-4">
                <div class="text-center mb-4">
                  <h3 class="card-title fw-bold">{{ plan.name }}</h3>
                  <div class="price-container">
                    <span class="currency">R$</span>
                    <span class="price">{{ plan.price }}</span>
                    <span class="period">/{{ plan.period === 'monthly' ? 'mês' : 'ano' }}</span>
                  </div>
                  <div *ngIf="plan.popular" class="popular-badge">
                    Mais Popular
                  </div>
                </div>

                <ul class="feature-list">
                  <li *ngFor="let feature of plan.features" class="feature-item">
                    <i class="fas fa-check text-success me-2"></i>
                    {{ feature }}
                  </li>
                </ul>

                <div class="text-center mt-4">
                  <button 
                    class="btn btn-primary btn-lg w-100" 
                    (click)="selectPlan(plan)"
                    [disabled]="isCurrentPlan(plan)"
                  >
                    <span *ngIf="isCurrentPlan(plan)">Plano Atual</span>
                    <span *ngIf="!isCurrentPlan(plan)">Escolher Plano</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-5">
          <p class="text-muted">
            Precisa de um plano personalizado? 
            <a href="#" class="text-primary">Entre em contato</a>
          </p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .upgrade-container {
      min-height: 100vh;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 20px 0;
    }

    .plan-card {
      border: none;
      border-radius: 16px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }

    .plan-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    }

    .plan-card.popular {
      border: 2px solid #007bff;
      transform: scale(1.05);
    }

    .plan-card.popular::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, #007bff, #00d4ff);
    }

    .price-container {
      margin: 20px 0;
    }

    .currency {
      font-size: 1.5rem;
      font-weight: 600;
      color: #6c757d;
    }

    .price {
      font-size: 3rem;
      font-weight: 700;
      color: #007bff;
      margin: 0 5px;
    }

    .period {
      font-size: 1rem;
      color: #6c757d;
    }

    .popular-badge {
      background: linear-gradient(90deg, #007bff, #00d4ff);
      color: white;
      padding: 8px 16px;
      border-radius: 20px;
      font-size: 0.875rem;
      font-weight: 600;
      margin-top: 10px;
      display: inline-block;
    }

    .feature-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .feature-item {
      padding: 8px 0;
      border-bottom: 1px solid #f8f9fa;
      font-size: 0.95rem;
    }

    .feature-item:last-child {
      border-bottom: none;
    }

    .btn-primary {
      background: linear-gradient(90deg, #007bff, #00d4ff);
      border: none;
      border-radius: 8px;
      font-weight: 600;
      padding: 12px 24px;
    }

    .btn-primary:hover {
      background: linear-gradient(90deg, #0056b3, #00b3cc);
      transform: translateY(-1px);
    }

    .btn-primary:disabled {
      background: #6c757d;
      cursor: not-allowed;
      transform: none;
    }

    @media (max-width: 768px) {
      .plan-card.popular {
        transform: none;
      }
      
      .price {
        font-size: 2.5rem;
      }
    }
  `]
})
export class LayoutUpgradeComponent {
  plans: Plan[] = [
    {
      id: 'free',
      name: 'Free',
      price: 0,
      period: 'monthly',
      features: [
        '1 usuário',
        '100 produtos',
        'Relatórios básicos',
        'Suporte por email',
        'Atualizações gratuitas'
      ]
    },
    {
      id: 'pro',
      name: 'Pro',
      price: 97,
      period: 'monthly',
      features: [
        '5 usuários',
        'Produtos ilimitados',
        'Relatórios avançados',
        'Integrações',
        'Suporte prioritário',
        'Backup automático',
        'API access'
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 297,
      period: 'monthly',
      features: [
        'Usuários ilimitados',
        'Todas as funcionalidades Pro',
        'White-label',
        'Suporte 24/7',
        'Onboarding personalizado',
        'SLA garantido',
        'Customizações'
      ]
    }
  ];

  constructor(
    private authService: AuthService,
    private notificationService: NotificationService
  ) {}

  selectPlan(plan: Plan): void {
    if (this.isCurrentPlan(plan)) {
      this.notificationService.showInfo('Este já é seu plano atual');
      return;
    }

    // Aqui você implementaria a integração com gateway de pagamento
    this.notificationService.showSuccess(`Plano ${plan.name} selecionado! Redirecionando para pagamento...`);
    
    // Simular redirecionamento para pagamento
    setTimeout(() => {
      this.notificationService.showInfo('Integração com gateway de pagamento será implementada');
    }, 2000);
  }

  isCurrentPlan(plan: Plan): boolean {
    const currentUser = this.authService.getCurrentUser();
    return currentUser?.subscription.plan === plan.id;
  }
} 