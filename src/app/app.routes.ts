import { Routes } from '@angular/router';
import { Contato } from './componentes/contato/contato';
import { Home } from './componentes/home/home';
import { Quemsomos } from './componentes/quemsomos/quemsomos';
import { Cadastro } from './componentes/cadastro/cadastro';

export const routes: Routes = [
  { path: "contato", component: Contato, title: "Contato" },
  { path: "home", component: Home, title: "Home" },
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "quemsomos", component: Quemsomos, title: "Quem somos" },
  { path: "cadastro", component: Cadastro, title: "Cadastro" },
];
