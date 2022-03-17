import { Component, OnInit } from '@angular/core';

interface Skills {
  name: string,
  total: number,

}


const Skills: Skills[] = [
  {
    name: "Acrobatics",
    total: 8
  },
  {
    name: "Climb",
    total: 6
  },
  {
    name: "Deception",
    total: 4
  },
  {
    name: "Endurance",
    total: 3
  },
  {
    name: "Gather Information",
    total: 2
  },
  {
    name: "Initiative",
    total: 13
  },
  {
    name: "Jump",
    total: 6
  },
  {
    name: "Knowledge(Bureaucracy)",
    total: 3
  },
  {
    name: "Knowledge(Galactic Lore)",
    total: 2
  },
  {
    name: "Knowledge(Life Sciences)",
    total: 13
  },
  {
    name: "Knowledge(Physical Sciences)",
    total: 6
  },
  {
    name: "Knowledge(Social Sciences)",
    total: 3
  },
  {
    name: "Knowledge(Tactics)",
    total: 3
  },
  {
    name: "Knowledge(Technology)",
    total: 3
  },
  {
    name: "Mechanics",
    total: 3
  },
  {
    name: "Perception",
    total: 4
  },
  {
    name: "Pilot",
    total: 8
  },
  {
    name: "Ride",
    total: 8
  },
  {
    name: "Stealth",
    total: 24
  },
  {
    name: "Survival",
    total: 2
  },
  {
    name: "Swim",
    total: 6
  },
  {
    name: "Treat Injury",
    total: 2
  },
  {
    name: "Use Computer",
    total: 8
  },  

]

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})



export class SkillsComponent implements OnInit {




  constructor() { }

skills = Skills;

  ngOnInit(): void {
  }

}
