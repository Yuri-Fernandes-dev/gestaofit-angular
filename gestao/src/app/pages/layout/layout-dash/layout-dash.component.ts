import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BarraPrincipalComponent } from '../../../components/barra-principal/barra-principal.component';
import { NgStyle, NgIf, NgClass } from '@angular/common';
import { CardDashComponent } from '../../../components/card-dash/card-dash.component';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration, ChartData } from 'chart.js';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-layout-dash',
  standalone: true,
  imports: [
    BarraPrincipalComponent,
    NgStyle,
    NgIf,
    NgClass,
    CardDashComponent,
    NgChartsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './layout-dash.component.html',
  styleUrl: './layout-dash.component.css'
})
export class LayoutDashComponent implements OnInit {
  // Propriedade para verificar se está no browser
  isBrowser: boolean;

  // Dados originais mockados
  private originalPieData = {
    labels: ['Eletrônicos', 'Roupas', 'Alimentos', 'Outros'],
    datasets: [{
      data: [300, 500, 200, 240],
      backgroundColor: ['#10b981', '#f59e0b', '#ef4444', '#3b82f6'],
      borderColor: 'white',
      borderWidth: 2
    }]
  };

  private originalBarData = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [{
      data: [200, 300, 400, 350, 500, 450],
      backgroundColor: '#3b82f6',
      borderRadius: 6,
      maxBarThickness: 40,
      label: 'Vendas (R$)'
    }]
  };

  // Dados dos gráficos
  public pieChartData: ChartData<'pie'> = this.originalPieData;
  public barChartData: ChartData<'bar'> = this.originalBarData;

  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            family: 'Roboto',
            size: 12
          },
          padding: 20
        }
      },
      tooltip: {
        enabled: true,
        backgroundColor: 'rgba(30, 41, 59, 0.8)',
        titleFont: {
          size: 14,
          weight: 'bold'
        },
        bodyFont: {
          size: 13
        },
        padding: 12,
        cornerRadius: 6
      }
    }
  };

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)'
        },
        ticks: {
          font: {
            family: 'Roboto'
          }
        }
      },
      x: {
        grid: {
          display: false
        },
        ticks: {
          font: {
            family: 'Roboto'
          }
        }
      }
    },
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            family: 'Roboto',
            size: 12
          },
          padding: 20
        }
      },
      tooltip: {
        enabled: true,
        backgroundColor: 'rgba(30, 41, 59, 0.8)',
        titleFont: {
          size: 14,
          weight: 'bold'
        },
        bodyFont: {
          size: 13
        },
        padding: 12,
        cornerRadius: 6
      }
    }
  };

  // Propriedades para o filtro de período
  public selectedPeriod: string = 'month'; // Padrão: Este Mês
  public startDate: Date | null = null; 
  public endDate: Date | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.filterData(); // Aplica o filtro inicial apenas no browser
    }
  }

  applyPeriodFilter(): void {
    const today = new Date();
    
    switch(this.selectedPeriod) {
      case 'today':
        this.startDate = today;
        this.endDate = today;
        break;
      case 'week':
        const firstDayOfWeek = new Date(today);
        firstDayOfWeek.setDate(today.getDate() - today.getDay());
        this.startDate = firstDayOfWeek;
        this.endDate = today;
        break;
      case 'month':
        const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
        this.startDate = firstDayOfMonth;
        this.endDate = today;
        break;
      case 'quarter':
        const quarter = Math.floor(today.getMonth() / 3);
        const firstDayOfQuarter = new Date(today.getFullYear(), quarter * 3, 1);
        this.startDate = firstDayOfQuarter;
        this.endDate = today;
        break;
      case 'year':
        const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
        this.startDate = firstDayOfYear;
        this.endDate = today;
        break;
    }
    
    this.filterData();
  }

  filterData(): void {
    if (!this.startDate || !this.endDate) {
      return;
    }

    // Ajusta as datas para início e fim do dia
    const start = new Date(this.startDate);
    start.setHours(0, 0, 0, 0);
    const end = new Date(this.endDate);
    end.setHours(23, 59, 59, 999);

    // Lógica de filtragem mockada
    // Substitua por uma chamada à API, se disponível
    const filteredPieData = {
      labels: this.originalPieData.labels,
      datasets: [{
        data: this.originalPieData.datasets[0].data.map(value => {
          // Simula redução de dados fora do período
          const isInRange = Math.random() > 0.3; // Exemplo: 70% de chance de manter
          return isInRange ? value : value * 0.5;
        }),
        backgroundColor: this.originalPieData.datasets[0].backgroundColor
      }]
    };

    const filteredBarData = {
      labels: this.originalBarData.labels,
      datasets: [{
        data: this.originalBarData.datasets[0].data.map((value, index) => {
          // Simula filtragem por mês
          const monthIndex = new Date(2025, index, 1).getMonth();
          const isInRange = monthIndex >= start.getMonth() && monthIndex <= end.getMonth();
          return isInRange ? value : value * 0.5;
        }),
        backgroundColor: this.originalBarData.datasets[0].backgroundColor,
        label: 'Vendas (R$)'
      }]
    };

    this.pieChartData = filteredPieData;
    this.barChartData = filteredBarData;
  }
}