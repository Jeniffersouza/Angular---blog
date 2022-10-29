import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-others-card',
  templateUrl: './others-card.component.html',
  styleUrls: ['./others-card.component.css']
})
export class OthersCardComponent implements OnInit {
  @Input()
  imagemArtigo:string=''
  @Input()
  tituloArtigo:string=''
  @Input()
  descricaoArtigo:string=''
  @Input()
  Id:string='0'
  constructor() { }

  ngOnInit(): void {
  }

}
