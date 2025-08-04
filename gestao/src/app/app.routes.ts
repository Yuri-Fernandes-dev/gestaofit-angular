import { Routes } from '@angular/router';
import { LayoutCadastroComponent } from './pages/layout/layout-cadastro/layout-cadastro.component';
import { LayoutLoginComponent } from './pages/layout/layout-login/layout-login.component';
import { LayoutRecuperarComponent } from './pages/layout/layout-recuperar/layout-recuperar.component';
import { LayoutDashComponent } from './pages/layout/layout-dash/layout-dash.component';
import { LayoutProdutosComponent } from './pages/layout/layout-produtos/layout-produtos.component';
import { LayoutVendasComponent } from './pages/layout/layout-vendas/layout-vendas.component';
import { LayoutDespesasComponent } from './pages/layout/layout-despesas/layout-despesas.component';
import { LayoutMenuComponent } from './pages/layout/layout-menu/layout-menu.component';
import { LayoutNovoprodutoComponent } from './pages/layout/layout-novoproduto/layout-novoproduto.component';
import { LayoutCategoriasComponent } from './pages/layout/layout-categorias/layout-categorias.component';
import { LayoutUpgradeComponent } from './pages/layout/layout-upgrade/layout-upgrade.component';
import { AuthGuard } from './guards/auth.guard';
import { SubscriptionGuard } from './guards/subscription.guard';

export const routes: Routes = [
    // Rotas públicas
    { path: '', component: LayoutLoginComponent },
    { path: 'cadastro', component: LayoutCadastroComponent },
    { path: 'recuperar', component: LayoutRecuperarComponent },
    
    // Rotas protegidas que requerem autenticação
    { 
        path: 'dash', 
        component: LayoutDashComponent,
        canActivate: [AuthGuard]
    },
    { 
        path: 'produtos', 
        component: LayoutProdutosComponent,
        canActivate: [AuthGuard, SubscriptionGuard]
    },
    { 
        path: 'vendas', 
        component: LayoutVendasComponent,
        canActivate: [AuthGuard, SubscriptionGuard]
    },
    { 
        path: 'despesas', 
        component: LayoutDespesasComponent,
        canActivate: [AuthGuard, SubscriptionGuard]
    },
    { 
        path: 'menu', 
        component: LayoutMenuComponent,
        canActivate: [AuthGuard]
    },
    { 
        path: 'novoproduto', 
        component: LayoutNovoprodutoComponent,
        canActivate: [AuthGuard, SubscriptionGuard]
    },
    { 
        path: 'categorias', 
        component: LayoutCategoriasComponent,
        canActivate: [AuthGuard, SubscriptionGuard]
    },
    { 
        path: 'upgrade', 
        component: LayoutUpgradeComponent,
        canActivate: [AuthGuard]
    },
    
    // Rota wildcard para página não encontrada
    { path: '**', redirectTo: '' }
];
