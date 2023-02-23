import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent {

  public valor: boolean = true;
  public heigthPx: string = "20px";
  public backgroundColor: string = "red";

  constructor () { }

  ngOnInit(): void {

    setInterval( ()=>{
      if(this.valor){
         this.valor = false;
        }else{
          this.valor = true;
        }

      if (this.heigthPx =="20px"){
        this.heigthPx = "50px";
        this.backgroundColor = "purple";
      } else {
        this.heigthPx = "20px";
        this.backgroundColor = "darkgreen";
      }
    },2000);

  }

}
