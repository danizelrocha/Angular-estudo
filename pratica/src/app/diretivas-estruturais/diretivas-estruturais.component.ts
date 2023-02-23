import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent {

  public condition: boolean = true;
  public conditionClick:boolean = true;

  public list: Array<{nome: string, idade: number}> = [
    { nome: "Daniel Rocha", idade:45 },
    { nome: "Tiago Rocha", idade:44 },
    { nome: "Laura Rocha", idade:13 }
  ];
  constructor() { }

  ngOnInit(): void {

    setInterval(()=> {
      if (this.condition) {
        this.condition = false;
      } else {
        this.condition = true;
      }
    }, 2000)
  }

  public onClick (){
    if (this.conditionClick) {
      this.conditionClick = false;
    } else {
      this.conditionClick = true;
    }
  }

  public onClickAddList() {
    this.list.push({nome: "Manuela Rocha", idade:11})
  }

  public onClickEventList(event: number) {
    this.list.splice(event, 1)
  }
}
