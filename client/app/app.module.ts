import { NgModule } from'@angular/core';
import { BrowserModule } from'@angular/platform-browser';
import { AppComponent } from './app.component';
import { FotoModule } from './foto/foto.module';
import { HttpModule } from '@angular/http'; //provider Http
import { PainelModule } from './painel/painel.module'
import 'rxjs/add/operator/map'; // Observable é alterado para que tenha os serviços do map
import { CadastroComponent } from './cadastro/cadastro.component'
import { ListagemComponent } from './listagem/listagem.component'
import { routing } from './app.route';

@NgModule({
    imports: [BrowserModule, 
              FotoModule, 
              HttpModule, 
              PainelModule, 
              routing ],
    declarations: [AppComponent, CadastroComponent, ListagemComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }