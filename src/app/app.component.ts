import { Component } from '@angular/core';
import { PaginaComponent } from './page/pagina/pagina.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PaginaComponent], // Importa el componente PaginaComponent
  template: '<app-pagina></app-pagina>', // Usa el selector de PaginaComponent
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jorgeclass';
}

