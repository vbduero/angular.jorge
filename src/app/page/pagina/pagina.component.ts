import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pagina',
  standalone: true, // Indica que este componente es standalone
  imports: [CommonModule, FormsModule], // Importa otros módulos necesarios
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent {
  name: string = '';
  email: string = '';
  formData: string[] = [];

  enviar() {
    const formDataText = `Nombre: ${this.name}, Email: ${this.email}`;
    this.formData.push(formDataText);

    // Limpiar campos después de enviar
    this.name = '';
    this.email = '';
  }
}

