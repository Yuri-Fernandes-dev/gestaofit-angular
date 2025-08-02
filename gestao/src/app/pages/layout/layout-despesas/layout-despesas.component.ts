import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BarraPrincipalComponent } from "../../../components/barra-principal/barra-principal.component";

@Component({
  selector: 'app-layout-despesas',
  standalone: true,
  templateUrl: './layout-despesas.component.html',
  styleUrls: ['./layout-despesas.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    BarraPrincipalComponent
  ]
})
export class LayoutDespesasComponent {
  mesSelecionado: string = '2025-08';  // exemplo com mês selecionado já definido
  categoriaSelecionada: string = '';
  filtroDescricao: string = '';

  categorias: string[] = ['Reposição de Estoque', 'Contas Fixas', 'Marketing', 'Outros'];

  despesas = [
    {
      id: 1,
      data: '2025-08-01',
      categoria: 'Reposição de Estoque',
      descricao: 'Compra de Whey Protein',
      valor: 1200.00,
      fornecedor: 'Suplementos BR'
    },
    {
      id: 2,
      data: '2025-08-02',
      categoria: 'Marketing',
      descricao: 'Anúncio Instagram',
      valor: 300.00,
      fornecedor: 'Meta Ads'
    },
    {
      id: 3,
      data: '2025-08-03',
      categoria: 'Contas Fixas',
      descricao: 'Aluguel da Loja',
      valor: 1700.00,
      fornecedor: 'Imobiliária Central'
    }
  ];

  // Somatório das despesas filtradas do mês selecionado (atual)
  get totalMesAtual(): number {
    if (!this.mesSelecionado) return 0;
    return this.despesas
      .filter(d => d.data.startsWith(this.mesSelecionado))
      .reduce((acc, cur) => acc + cur.valor, 0);
  }

  // Valor fixo do mês anterior só pra exemplo (pode vir de API no futuro)
  totalMesAnterior: number = 4000;

  // Calcula economia em valor e percentual
  get economiaMes() {
    const valor = this.totalMesAnterior - this.totalMesAtual;
    const percentual = this.totalMesAnterior ? (valor / this.totalMesAnterior) * 100 : 0;
    return {
      valor: valor > 0 ? valor : 0,  // não mostrar valor negativo
      percentual: percentual > 0 ? percentual.toFixed(1) : '0.0'
    };
  }

  // Calcula média por dia no mês selecionado
  get mediaPorDia(): number {
    if (!this.mesSelecionado) return 0;

    const [ano, mes] = this.mesSelecionado.split('-').map(Number);
    const diasNoMes = new Date(ano, mes, 0).getDate();

    return this.totalMesAtual / diasNoMes;
  }

  despesasFiltradas() {
    return this.despesas.filter(d => {
      const filtroData = !this.mesSelecionado || d.data.startsWith(this.mesSelecionado);
      const filtroCategoria = !this.categoriaSelecionada || d.categoria === this.categoriaSelecionada;
      const filtroDescricao = !this.filtroDescricao || d.descricao.toLowerCase().includes(this.filtroDescricao.toLowerCase());
      return filtroData && filtroCategoria && filtroDescricao;
    });
  }

  abrirModal() {
    alert('Abrir modal de nova despesa...');
  }

  editarDespesa(despesa: any) {
    alert('Editar: ' + JSON.stringify(despesa));
  }

  excluirDespesa(id: number) {
    this.despesas = this.despesas.filter(d => d.id !== id);
  }
}
