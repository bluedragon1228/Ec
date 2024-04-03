import { Component } from '@angular/core';
import { menJeans } from '../../../../../Data/Men/men_jeans';
import { gounsPage1 } from '../../../../../Data/Gouns/gouns';
import { lenghacholiPage2 } from '../../../../../Data/Saree/lenghaCholiPage2';
import { mens_kurta } from '../../../../../Data/Men/men_kurta';
import { mensShoesPage1 } from '../../../../../Data/shoes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  menJeans : any
  womenGowns : any
  lenghaCholi : any
  mensKurta : any
  mensShoes : any

  ngOnInit(){
    this.menJeans = menJeans.slice(0,4)
    this.womenGowns = gounsPage1.slice(0,4)
    this.lenghaCholi = lenghacholiPage2.slice(0,4)
    this.mensKurta = mens_kurta.slice(0,4)
    this.mensShoes = mensShoesPage1.slice(0,4)
  }
}
