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


export const routes: Routes = [
    {path: '', component: LayoutLoginComponent},
    {path: 'cadastro', component:LayoutCadastroComponent},
    {path: 'recuperar', component:LayoutRecuperarComponent},
    {path: 'dash', component:LayoutDashComponent},
    {path: 'produtos', component:LayoutProdutosComponent},
    {path:'vendas', component: LayoutVendasComponent},
    {path: 'despesas', component: LayoutDespesasComponent},
    {path: 'menu', component: LayoutMenuComponent},
    {path: 'novoproduto', component: LayoutNovoprodutoComponent},
    {path: 'categorias', component: LayoutCategoriasComponent}
    
    
];
