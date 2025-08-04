import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BarraPrincipalComponent } from "../../../components/barra-principal/barra-principal.component";
import { BtnBasicoComponent } from "../../../components/btn-basico/btn-basico.component";
import { RouterLink } from '@angular/router';
import { ProductService, Product, ProductFilters } from '../../../services/product.service';
import { NotificationService } from '../../../services/notification.service';

@Component({
  selector: 'app-layout-produtos',
  standalone: true,
  imports: [BarraPrincipalComponent, BtnBasicoComponent, RouterLink, CommonModule, FormsModule],
  templateUrl: './layout-produtos.component.html',
  styleUrl: './layout-produtos.component.css'
})
export class LayoutProdutosComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  selectedProduct: Product | null = null;
  isLoading = false;
  
  // Filtros
  searchTerm = '';
  selectedCategory = '';
  categories: string[] = ['Suplementos', 'Equipamentos', 'Roupas', 'Acessórios'];
  
  // Paginação
  currentPage = 1;
  totalPages = 1;
  totalItems = 0;
  itemsPerPage = 10;

  constructor(
    private productService: ProductService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.isLoading = true;
    
    // Para demo, usando dados mockados
    // Quando conectar com backend, usar: this.productService.getProducts(this.currentPage, this.itemsPerPage, this.getFilters())
    setTimeout(() => {
      this.products = this.productService.getMockProducts();
      this.applyFilters();
      this.isLoading = false;
    }, 500);
  }

  applyFilters(): void {
    this.filteredProducts = this.products.filter(product => {
      const matchesSearch = !this.searchTerm || 
        product.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        product.code.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      const matchesCategory = !this.selectedCategory || 
        product.category === this.selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }

  getFilters(): ProductFilters {
    return {
      search: this.searchTerm || undefined,
      category: this.selectedCategory || undefined
    };
  }

  onSearch(): void {
    this.currentPage = 1;
    this.applyFilters();
  }

  onCategoryChange(): void {
    this.currentPage = 1;
    this.applyFilters();
  }

  selectProduct(product: Product): void {
    this.selectedProduct = product;
  }

  editProduct(product: Product): void {
    // Implementar navegação para edição
    this.notificationService.showInfo('Funcionalidade de edição será implementada');
  }

  deleteProduct(product: Product): void {
    if (confirm(`Tem certeza que deseja excluir o produto "${product.name}"?`)) {
      this.isLoading = true;
      
      // Para demo, removendo do array local
      // Quando conectar com backend, usar: this.productService.deleteProduct(product.id)
      setTimeout(() => {
        this.products = this.products.filter(p => p.id !== product.id);
        this.applyFilters();
        this.selectedProduct = null;
        this.notificationService.showSuccess('Produto excluído com sucesso!');
        this.isLoading = false;
      }, 500);
    }
  }

  getStockStatus(stock: number): { text: string; class: string } {
    if (stock === 0) {
      return { text: 'Sem estoque', class: 'text-danger' };
    } else if (stock < 10) {
      return { text: 'Estoque baixo', class: 'text-warning' };
    } else {
      return { text: 'Em estoque', class: 'text-success' };
    }
  }
}
