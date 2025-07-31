import { Routes } from '@angular/router';
import { LayoutCadastroComponent } from './pages/layout/layout-cadastro/layout-cadastro.component';
import { LayoutLoginComponent } from './pages/layout/layout-login/layout-login.component';
import { LayoutRecuperarComponent } from './pages/layout/layout-recuperar/layout-recuperar.component';
import { LayoutDashComponent } from './pages/layout/layout-dash/layout-dash.component';
import { LayoutProdutosComponent } from './pages/layout/layout-produtos/layout-produtos.component';

export const routes: Routes = [
    {path: '', component: LayoutLoginComponent},
    {path: 'cadastro', component:LayoutCadastroComponent},
    {path: 'recuperar', component:LayoutRecuperarComponent},
    {path: 'dash', component:LayoutDashComponent},
    {path: 'produtos', component:LayoutProdutosComponent}
    
];
