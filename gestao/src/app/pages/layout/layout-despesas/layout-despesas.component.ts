import { CommonModule, NgClass, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BarraPrincipalComponent } from "../../../components/barra-principal/barra-principal.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout-despesas',
  standalone: true,
  imports: [CommonModule, FormsModule, BarraPrincipalComponent, RouterModule, NgClass, DatePipe],
  templateUrl: './layout-despesas.component.html',
  styleUrl: './layout-despesas.component.scss',
  styles: [`
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1050;
    }
    .modal-custom {
      background-color: white;
      border-radius: 5px;
      width: 500px;
      max-width: 90%;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    }
    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      border-bottom: 1px solid #dee2e6;
    }
    .modal-body {
      padding: 1rem;
    }
    .modal-footer {
      padding: 1rem;
      border-top: 1px solid #dee2e6;
      display: flex;
      justify-content: flex-end;
      gap: 0.5rem;
    }
  `]
})
export class LayoutDespesasComponent implements OnInit {
  mesSelecionado: string = '2025-08';  // exemplo com mês selecionado já definido
  categoriaSelecionada: string = '';
  filtroDescricao: string = '';
  
  // Modal
  showModal: boolean = false;
  modoEdicao: boolean = false;
  
  // Nova despesa
  novaDespesa: any = {
    id: 0,
    data: '',
    categoria: '',
    descricao: '',
    valor: 0,
    fornecedor: ''
  };

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
      percentual: percentual // retornando como número para comparação
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

  // Implementação do ngOnInit
  ngOnInit(): void {
    // Inicialização do componente
    console.log('Componente de despesas inicializado');
  }

  // Métodos para o modal
  abrirModal() {
    // Resetar o formulário
    this.novaDespesa = {
      id: 0,
      data: new Date().toISOString().split('T')[0],
      categoria: '',
      descricao: '',
      valor: 0,
      fornecedor: ''
    };
    
    this.modoEdicao = false;
    this.showModal = true;
  }
  
  fecharModal(event: any) {
    // Fechar apenas se clicou no fundo ou no botão de fechar
    if (event.target.classList.contains('modal-overlay') || 
        event.target.classList.contains('btn-close') ||
        event.target.classList.contains('btn-secondary')) {
      this.showModal = false;
    }
  }
  
  salvarDespesa() {
    // Validar campos obrigatórios
    if (!this.novaDespesa.data || !this.novaDespesa.categoria || !this.novaDespesa.descricao || !this.novaDespesa.valor) {
      alert('Por favor, preencha todos os campos obrigatórios!');
      return;
    }
    
    // Se for uma nova despesa, gerar ID único
    if (this.novaDespesa.id === 0) {
      // Gerar ID único (simulado)
      this.novaDespesa.id = Math.floor(Math.random() * 10000);
      // Adicionar à lista de despesas
      this.despesas.push({...this.novaDespesa});
    } else {
      // Atualizar despesa existente
      const index = this.despesas.findIndex(d => d.id === this.novaDespesa.id);
      if (index !== -1) {
        this.despesas[index] = {...this.novaDespesa};
      }
    }
    
    // Fechar o modal
    this.showModal = false;
  }
  
  editarDespesa(despesa: any) {
    // Copiar dados da despesa para o formulário
    this.novaDespesa = {...despesa};
    this.modoEdicao = true;
    this.showModal = true;
  }
  
  excluirDespesa(id: number) {
    // Confirmar exclusão
    if (confirm('Tem certeza que deseja excluir esta despesa?')) {
      // Filtrar a despesa da lista
      this.despesas = this.despesas.filter(d => d.id !== id);
    }
  }
  
  adicionarCategoria() {
    const novaCategoria = prompt('Digite o nome da nova categoria:');
    if (novaCategoria && novaCategoria.trim() !== '') {
      // Verifica se a categoria já existe
      if (!this.categorias.includes(novaCategoria.trim())) {
        this.categorias.push(novaCategoria.trim());
        this.novaDespesa.categoria = novaCategoria.trim();
      } else {
        alert('Esta categoria já existe!');
      }
    }
  }
}
