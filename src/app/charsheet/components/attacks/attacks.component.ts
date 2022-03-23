import { Component,  OnInit} from '@angular/core';

interface Weapons {
  name: string,
  type: string,
  attack_mod: string,
  attack_misc: number,
  damage: string,
  damage_mod: string,
  damage_misc: number,
  range: number,
  critMult: number,
  attack_notes: string,
  weapon_notes: string,
}

const Weapons: Weapons[]=[
  {
    name: "Heavy Blaster Rifle",
    type: "Rifle",
    attack_mod: "DEX",
    attack_misc: 0,
    damage: "3d12",
    damage_mod: "None",
    damage_misc: 0,
    range: 20,
    critMult: 2,
    attack_notes: "Point Blank Shot, Precise Shot, deadeye (miniaturized), retractable stock",
    weapon_notes: "S,A",

  },
  {
    name: "Unarmed",
    type: "Melee",
    attack_mod: "STR",
    attack_misc: 0,
    damage: "1d4",
    damage_mod: "None",
    damage_misc: 0,
    range: 0,
    critMult: 2,
    attack_notes: "",
    weapon_notes: "",

  }


]

@Component({
  selector: 'attacks',
  templateUrl: './attacks.component.html',
  styleUrls: ['./attacks.component.scss']
})
export class AttacksComponent implements OnInit {

  constructor() { }
heroLevel: number = 7
halfHeroicLevel: number = Math.floor(this.heroLevel/2);
weapons = Weapons;
weapontoAdd :string = "";
str_mod: number = 3;
dex_mod: number = 5;
cha_mod: number = -1;
bab: number = 6;
attack_total:number = 0;
  ngOnInit(): void {
  }

calcModAttack(event: any, misc: any){
  console.log('mod.event', event.value, 'misc.value', misc.value);
  let mod = 0;
  if (event.value == "STR"){
    mod = this.str_mod;
  }else if (event.value == "DEX"){
    mod = this.dex_mod;
  }else{
    mod = this.cha_mod;
  }

  this.attack_total = mod + Number(misc.value) + this.bab;
}

calcMiscAttack(misc: any, modifier: any){
  console.log('mod.event', modifier.value, 'misc.value', misc.value);
  let mod = 0;
  if (modifier.value == "STR"){
    mod = this.str_mod;
  }else if (modifier.value == "DEX"){
    mod = this.dex_mod;
  }else{
    mod = this.cha_mod;
  }
  this.attack_total = Number(misc.value) + mod + this.bab;
}

addAttack(){

}

modAttack(){

}

}
