import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BarraPrincipalComponent } from '../../../components/barra-principal/barra-principal.component';
import { NgStyle, NgIf } from '@angular/common';
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
      backgroundColor: ['#00BF63', '#FFBD59', '#FF3131', '#38B6FF']
    }]
  };

  private originalBarData = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [{
      data: [200, 300, 400, 350, 500, 450],
      backgroundColor: '#38B6FF',
      label: 'Vendas (R$)'
    }]
  };

  // Dados dos gráficos
  public pieChartData: ChartData<'pie'> = this.originalPieData;
  public barChartData: ChartData<'bar'> = this.originalBarData;

  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        enabled: true
      }
    }
  };

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        enabled: true
      }
    }
  };

  // Propriedades para o filtro de data
  public startDate: Date | null = new Date(new Date().getFullYear(), new Date().getMonth(), 1); // Início do mês
  public endDate: Date | null = new Date(); // Hoje

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.filterData(); // Aplica o filtro inicial apenas no browser
    }
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