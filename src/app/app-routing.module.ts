import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { ListaMentoradosComponent } from './lista-mentorados/lista-mentorados.component';
import { ListaMentoresComponent } from './lista-mentores/lista-mentores.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/mentores' },
  { path: 'mentores', component: ListaMentoresComponent },
  {path:'mentores/:mentorId',component:DetalleComponent,children:[
    {path:'mentorados',component:ListaMentoradosComponent}
  ]},
  { path: '**', redirectTo: '/mentores' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
