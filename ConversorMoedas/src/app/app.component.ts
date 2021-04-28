import { ConversorService } from './conversor.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ConversorMoedas';

  formulario: any;
  valorConvertido : number;
  visibilidadeValorConvertido : boolean;

  constructor(private conversorService : ConversorService) { }

  ngOnInit(): void {
    this.visibilidadeValorConvertido = false;
    this.formulario = new FormGroup({
      valor: new FormControl(null)
    });
  }

  Converter(): void {
    const valor = this.formulario.value.valor;   
    this.visibilidadeValorConvertido = true; 

    this.conversorService.RealizarConversao().subscribe(resultado => {
      
      this.valorConvertido = Number((valor * resultado.rates.BRL).toFixed(2));
    })

  }
}
