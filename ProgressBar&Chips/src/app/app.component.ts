import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
export interface ChipColor

{

  name:string;

  color:ThemePalette;

}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment29dec';
  

  colors:ChipColor[]=

  [

    {name:'Singing',color:undefined},

    {name:'Dancing',color:'primary'},

    {name:'Cricket',color:'warn'},

    {name:'Writting',color:'accent'},

  ];
  
}
