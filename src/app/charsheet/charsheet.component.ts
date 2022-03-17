import { Component, OnInit } from '@angular/core';



interface Attributes {

  att_symbol: string,
  att_name: string,
  att_amount: number,
  att_modifier: number,

}



const Atts: Attributes[] = [
  {
    att_symbol: "STR",
    att_name: "Strength",
    att_amount: 10,
    att_modifier: 0,
  },
  {
    att_symbol: "DEX",
    att_name: "Dexterity",
    att_amount: 10,
    att_modifier: 0,
  },
  {
    att_symbol: "CON",
    att_name: "Constitution",
    att_amount: 10,
    att_modifier: 0,
  },
  {
    att_symbol: "INT",
    att_name: "Intelligence",
    att_amount: 10,
    att_modifier: 0,
  },
  {
    att_symbol: "WIS",
    att_name: "Wisdom",
    att_amount: 10,
    att_modifier: 0,
  },
  {
    att_symbol: "CHA",
    att_name: "Charisma",
    att_amount: 10,
    att_modifier: 0,
  },

]

@Component({
  selector: 'app-charsheet',
  templateUrl: './charsheet.component.html',
  styleUrls: ['./charsheet.component.scss']
})
export class CharsheetComponent implements OnInit {
charName: string = "Hot Tamale";
hp_current: number= 23;
hp_total: number = 74;
th_total: number = 23;
th_misc: number = 0;
damageReduction: number = 0;
shieldRating_curr: number = 0
shieldRating_max: number = 0;
immunity: string = "";
reflex_total: number = 26;
reflex_armor: number = 9;
reflex_class: number = 2;
reflex_misc: number = 0;
flatfoot: number = 22;
flatfoot_misc: number = 0;
fortitude_total: number = 23;
fortitude_armor: number = 8;
fortitude_class: number = 2;
fortitude_misc: number = 0;
will_total: number = 20;
will_armor: number = 7;
will_class: number = 4;
will_misc: number = 0;
grapple_total: number = 7;


  constructor() { }

 attributes = Atts;

  ngOnInit(): void {
  }

}
