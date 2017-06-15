import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-efi',
  templateUrl: './efi.component.html',
  styleUrls: ['./efi.component.css']
})
export class EfiComponent implements OnInit {
  name:string = 'Efi';
  minVal:number= 15;
  constructor() { }

  ngOnInit() {
  }

  changeName(name:string){
    this.name = name;
  }
  rangeChange(e){
    console.log(e);
  }
}
