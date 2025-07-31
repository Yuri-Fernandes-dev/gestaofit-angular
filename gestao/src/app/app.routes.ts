import { Routes } from '@angular/router';
import { LayoutCadastroComponent } from './pages/layout/layout-cadastro/layout-cadastro.component';
import { LayoutLoginComponent } from './pages/layout/layout-login/layout-login.component';

export const routes: Routes = [
    {path: '', component: LayoutLoginComponent},
    {path: 'cadastro', component:LayoutCadastroComponent}
    
];
