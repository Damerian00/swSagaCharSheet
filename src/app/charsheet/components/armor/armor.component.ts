import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'armor',
  templateUrl: './armor.component.html',
  styleUrls: ['./armor.component.scss']
})
export class ArmorComponent implements OnInit {
currArmor: string = "Combat Jumpsuit";
  constructor() { }

  ngOnInit(): void {
  }

}
