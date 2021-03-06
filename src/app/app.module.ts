import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LivroCadastrarComponent } from './livro/livro-cadastrar/livro-cadastrar.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { LivrosListaComponent } from './livro/livros-lista/livros-lista.component';

import { LivroService } from './livro/livro.service';

@NgModule({
  declarations: [
    AppComponent,
    LivroCadastrarComponent,
    CabecalhoComponent,
    LivrosListaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
