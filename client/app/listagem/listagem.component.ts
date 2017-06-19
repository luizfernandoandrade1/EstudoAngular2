import {Component} from '@angular/core'
import { Http } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})
export class ListagemComponent { 

    fotos: Object[] = []

    // @Inject faz a injeção de uma instância de HTTP from angular
    //Vide app.module, importação do HttpModule 
    //@Inject(Http) http === http: Http, desta forma é feita a injeção por tipo do TS 
    // dessa forma não é necessária a importação do decorator @Inject
    constructor(http: Http) {
        http.get('v1/fotos')        
        .map(res => res.json()) // quando a função possuir apenas um retorno o bloco dentro de {} pode ser omitido
        .subscribe(fotos => { // aero function res => corresponde a function (res)
            this.fotos = fotos;
            console.log(this.fotos);
        }, erro => console.log(erro));

    }
}