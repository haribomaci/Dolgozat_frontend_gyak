import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-diamond',
  templateUrl: './diamond.component.html',
  styleUrls: ['./diamond.component.scss']
})
export class DiamondComponent implements OnInit{

  aside = new FormControl('');
  alfa = new FormControl('');
  perimeter = new FormControl('');
  area = new FormControl('');

  perimeterVsisble = false;
  areaVsisble = false;

  constructor(){}
  ngOnInit():void {
  }
  onKeyup(event:any){
    if(event.key == "Enter"){
      this.onEnterHandler();
    }
  }
  onEnterHandler(){
    let aside = Number(this.aside.value);
    let alfa = Number(this.alfa.value);
    let perimeter = this.calcPerimeter(aside);
    let area = this.calcArea(aside, alfa);
    this.perimeter.setValue(String(perimeter));
    this.area.setValue(String(area));

    this.perimeterVsisble = true;
    this.areaVsisble = true;
  }
  calcPerimeter(aside:number){
    return aside*4;
  }
  calcArea(aside:number, alfa:number){
    let radian = alfa*Math.PI/180;
    let area= Math.pow(aside, 2)*radian;
    return area;
  }
}
