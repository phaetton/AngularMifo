import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaMentoresComponent } from './lista-mentores/lista-mentores.component';
import { DetalleComponent } from './detalle/detalle.component';
import { ListaMentoradosComponent } from './lista-mentorados/lista-mentorados.component';
import { DetalleMentoradoComponent } from './detalle-mentorado/detalle-mentorado.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaMentoresComponent,
    DetalleComponent,
    ListaMentoradosComponent,
    DetalleMentoradoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
