import { Component, Input } from '@angular/core'

@Component({
    moduleId: module.id,
    selector: 'foto',
    templateUrl: './foto.component.html'
})
export class FotoComponent { 

    @Input() titulo; // @Input torna as propriedades acessíveis no componente  
    @Input() url;

    
}