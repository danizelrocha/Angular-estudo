import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent implements OnInit {

  public nome: string = "Daniel";
  public idade: number = 45;
  public maisUm: number = 1;

  public checkedDisabled: boolean = false;
  public imgSrc:string = /* "https://vidafullstack.com.br/wp-content/uploads/2021/01/como-criar-site-400x250.jpg" */
  "https://conteudo.imguol.com.br/c/noticias/1c/2022/05/24/imagem-criada-no-imagen-prototipo-do-google-que-cria-imagens-baseadas-em-texto-neste-caso-um-cachorro-corgi-andando-de-bicicleta-na-times-square-usando-oculos-de-sol-e-chapeu-de-praia-1653397634334_v2_900x506.jpg";

  public imgTitle: string = "Property Binding"
  constructor() { }

  ngOnInit(): void {
  }

}
