import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
export interface ChipColor

{

  name:string;

  color:ThemePalette;

}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
  sports:string[]=['Singing','Dancing','Cricket','Writting'];

  colors:ChipColor[]=

  [

    {name:'Singing',color:undefined},

    {name:'Dancing',color:'primary'},

    {name:'Cricket',color:'warn'},

    {name:'Writting',color:'accent'},

  ];

}
