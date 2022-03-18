import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {

  constructor() { }

PCAO: string = "";
PCSA: string = "I'm special"

attOpt: string = this.PCAO;
specAct: string = this.PCSA;



  ngOnInit(): void {
  }

}
