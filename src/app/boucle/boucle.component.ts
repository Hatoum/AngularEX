import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-boucle',
  templateUrl: './boucle.component.html',
  styleUrls: ['./boucle.component.css']
})
export class BoucleComponent implements OnInit {

simpleIf = true;
ifBlock = true;
client = ['Ahmed', 'BenSalah', '52'];
switch1 = 1;
constructor() { }

  ngOnInit() {
  }

}
