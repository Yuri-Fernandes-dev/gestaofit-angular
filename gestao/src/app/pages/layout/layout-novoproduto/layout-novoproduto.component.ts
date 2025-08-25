import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { BarraPrincipalComponent } from "../../../components/barra-principal/barra-principal.component";
import { BtnBasicoComponent } from "../../../components/btn-basico/btn-basico.component";
import { ProductService, CreateProductRequest } from '../../../services/product.service';
import { NotificationService } from '../../../services/notification.service';
import { Router } from '@angular/router';

interface ProductForm {
  code: string;
  name: string;
  description: string;
  category: string;
  brand: string;
  cost: number;
  price: number;
  stock: number;
  size: string;
  color: string;
  expiryDate: string;
  imageUrl: string;
}

@Component({
  selector: 'app-layout-novoproduto',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, BarraPrincipalComponent, BtnBasicoComponent],
  templateUrl: './layout-novoproduto.component.html',
  styleUrl: './layout-novoproduto.component.css'
})
export class LayoutNovoprodutoComponent {
  product: ProductForm = {
    code: '',
    name: '',
    description: '',
    category: '',
    brand: '',
    cost: 0,
    price: 0,
    stock: 0,
    size: '',
    color: '',
    expiryDate: '',
    imageUrl: ''
  };

  isLoading = false;

  // Categorias dinâmicas
  categories: string[] = ['Suplementos', 'Equipamentos', 'Roupas', 'Acessórios'];
  showCategoryModal = false;
  novaCategoria = '';

  constructor(
    private productService: ProductService,
    private notificationService: NotificationService,
    private router: Router
  ) {}

  onSubmit(): void {
    if (!this.product.name || !this.product.category || !this.product.price || !this.product.stock) {
      this.notificationService.showError('Por favor, preencha todos os campos obrigatórios');
      return;
    }

    this.isLoading = true;

    const productData: CreateProductRequest = {
      name: this.product.name,
      category: this.product.category,
      size: this.product.size,
      color: this.product.color,
      price: this.product.price,
      stock: this.product.stock,
      description: this.product.description
    };

    // Para demo, usando setTimeout para simular API call
    setTimeout(() => {
      this.notificationService.showSuccess('Produto cadastrado com sucesso!');
      this.router.navigate(['/produtos']);
      this.isLoading = false;
    }, 1500);
  }

  getProfitMargin(): number {
    if (!this.product.cost || !this.product.price) return 0;
    return ((this.product.price - this.product.cost) / this.product.cost) * 100;
  }

  getProfitPerUnit(): number {
    if (!this.product.cost || !this.product.price) return 0;
    return this.product.price - this.product.cost;
  }

  selectImage(): void {
    this.notificationService.showInfo('Funcionalidade de upload de imagem será implementada');
    this.product.imageUrl = 'https://via.placeholder.com/300x300/667eea/ffffff?text=Produto';
  }

  removeImage(): void {
    this.product.imageUrl = '';
  }

  // Modal de categoria
  openCategoryModal(): void {
    this.novaCategoria = '';
    this.showCategoryModal = true;
  }

  closeCategoryModal(): void {
    this.showCategoryModal = false;
  }

  addCategoria(): void {
    const nome = this.novaCategoria.trim();
    if (!nome) {
      this.notificationService.showError('Digite o nome da categoria');
      return;
    }
    if (this.categories.includes(nome)) {
      this.notificationService.showWarning('Categoria já existe');
      return;
    }
    this.categories.push(nome);
    this.product.category = nome;
    this.showCategoryModal = false;
    this.notificationService.showSuccess('Categoria adicionada!');
  }
}
