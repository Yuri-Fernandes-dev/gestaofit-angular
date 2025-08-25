import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService, PaginatedResponse } from './api.service';

export interface Product {
  id: number;
  code: string;
  name: string;
  category: string;
  size: string;
  color: string;
  cost?: number;
  price: number;
  stock: number;
  description?: string;
  imageUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateProductRequest {
  name: string;
  category: string;
  size: string;
  color: string;
  price: number;
  stock: number;
  description?: string;
}

export interface UpdateProductRequest extends Partial<CreateProductRequest> {
  id: number;
}

export interface ProductFilters {
  search?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  inStock?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly ENDPOINT = '/products';

  constructor(private apiService: ApiService) {}

  getProducts(page: number = 1, limit: number = 10, filters?: ProductFilters): Observable<PaginatedResponse<Product>> {
    return this.apiService.getPaginated<Product>(this.ENDPOINT, page, limit, filters);
  }

  getProduct(id: number): Observable<Product> {
    return this.apiService.get<Product>(`${this.ENDPOINT}/${id}`).pipe(
      map(response => response.data)
    );
  }

  createProduct(product: CreateProductRequest): Observable<Product> {
    return this.apiService.post<Product>(this.ENDPOINT, product).pipe(
      map(response => response.data)
    );
  }

  updateProduct(product: UpdateProductRequest): Observable<Product> {
    return this.apiService.put<Product>(`${this.ENDPOINT}/${product.id}`, product).pipe(
      map(response => response.data)
    );
  }

  deleteProduct(id: number): Observable<void> {
    return this.apiService.delete<void>(`${this.ENDPOINT}/${id}`).pipe(
      map(() => void 0)
    );
  }

  updateStock(id: number, quantity: number): Observable<Product> {
    return this.apiService.patch<Product>(`${this.ENDPOINT}/${id}/stock`, { quantity }).pipe(
      map(response => response.data)
    );
  }

  getCategories(): Observable<string[]> {
    return this.apiService.get<string[]>('/categories').pipe(
      map(response => response.data)
    );
  }

  // Métodos para demo - remover quando conectar com backend
  getMockProducts(): Product[] {
    return [
      {
        id: 1,
        code: '001',
        name: 'Whey Protein Premium',
        category: 'Suplementos',
        size: '900g',
        color: 'Baunilha',
        cost: 45.50,
        price: 89.90,
        stock: 50,
        description: 'Whey protein de alta qualidade',
        createdAt: '2024-01-15T10:00:00Z',
        updatedAt: '2024-01-15T10:00:00Z'
      },
      {
        id: 2,
        code: '002',
        name: 'Creatina Monohidratada',
        category: 'Suplementos',
        size: '300g',
        color: 'Branco',
        cost: 22.50,
        price: 45.90,
        stock: 30,
        description: 'Creatina pura para ganho de força',
        createdAt: '2024-01-15T10:00:00Z',
        updatedAt: '2024-01-15T10:00:00Z'
      },
      {
        id: 3,
        code: '003',
        name: 'BCAA Aminoácidos',
        category: 'Suplementos',
        size: '500g',
        color: 'Limão',
        cost: 32.80,
        price: 65.90,
        stock: 25,
        description: 'BCAA para recuperação muscular',
        createdAt: '2024-01-15T10:00:00Z',
        updatedAt: '2024-01-15T10:00:00Z'
      }
    ];
  }
}