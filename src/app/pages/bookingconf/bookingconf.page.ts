import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-bookingconf',
  templateUrl: './bookingconf.page.html',
  styleUrls: ['./bookingconf.page.scss'],
})
export class BookingconfPage implements OnInit {

  constructor(public nav: NavController) { }

  ngOnInit() {
  }


  gotoHome() {




   

    

           this.nav.navigateForward('/');

  

}



}
