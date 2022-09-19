import { Component, OnInit } from '@angular/core';
import * as dataRaw from '../../../data/controls.json'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public jsonFormData: any;

  constructor() { }

  ngOnInit(): void {
    this.getJsonFormData();
  }

  getJsonFormData(): void{
   const { controls }: any = ( dataRaw as any ).default;
   this.jsonFormData = controls;
  }

}
