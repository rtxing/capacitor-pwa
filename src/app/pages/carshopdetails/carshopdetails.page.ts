import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {NgForm} from '@angular/forms';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-carshopdetails',
  templateUrl: './carshopdetails.page.html',
  styleUrls: ['./carshopdetails.page.scss'],
})
export class CarshopdetailsPage implements OnInit {
  
   carshop: any;
   sites : any = [];
   site: any;
    dateExample = new Date().toISOString();
    name : any;
    driver : any;
    dateinput : any;
    timeinput: any;


  constructor (private route: ActivatedRoute, public nav: NavController, private router: Router,private http: HttpClient) {

    // this.name = navParams.get('firstName');
    // console.log(this.name);




  }


  ngOnInit() {

    let csid = this.route.snapshot.paramMap.get('csid');
    
    let url = 'https://www.dsctech.in/api/carshops/' + csid + '/?format=json';
    this.carshop = this.http.get(url);
     this.carshop.subscribe(data => {
      console.log('csee data: ', data);
      this.sites = [data];
    });

  }

  sendPostRequest(form: NgForm) {

    console.log(form.value);
    console.log(this.driver);
console.log(this.dateExample);

  const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
    })
  };


    let postData = {
            "shop": "1",
            "date_time": this.dateExample
           
    }

    this.http.post("https://www.dsctech.in/api/booking/", postData, httpOptions)
      .subscribe(data => {
        console.log(data);
       }, error => {
        console.log(error);
      });

           this.nav.navigateForward('/bookingconf');

  }



}
