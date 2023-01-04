import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  panelOpenState = false;
  title = 'sliderAssignment';
  disabled = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  add(){
    this.value=this.value+this.step;
  }
  sub(){
    if(this.value>0){
    this.value=this.value-this.step;
  }
  }
  centered = false;
  disabled1 = false;
  unbounded = false;

  radius!: number;
  color!: string;
}
