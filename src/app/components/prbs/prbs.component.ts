import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-prbs',
  imports: [FormsModule, CommonModule],
  templateUrl: './prbs.component.html',
  styleUrl: './prbs.component.css'
})
export class PrbsComponent {

//     palabras: string[] = [];

//     nuevaPalabra: string = "";

// @ViewChild('messagesDiv') messagesDiv!: ElementRef;

//     addPalabra(){
//       if(this.nuevaPalabra && this.nuevaPalabra.trim()){

//         this.palabras.push(this.nuevaPalabra.trim())

//         this.nuevaPalabra = "";
//         setTimeout(() => this.scrollToBottom(), 100)
//       }
//     }
//     scrollToBottom(){
//       const el = this.messagesDiv.nativeElement;
//       el.scrollTop = el.scrollHeight;
//     }
mensaje = "";
mostrarConsejo = true
cerrarConsejo() {
    this.mostrarConsejo = false;
  }

  enviar() {
    alert(`Mensaje enviado: ${this.mensaje}`);
    this.mensaje = '';
  }
}
