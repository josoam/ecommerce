import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
declare var $:any;

@Component({
  selector: 'app-sinup',
  templateUrl: './sinup.component.html',
  styleUrls: ['./sinup.component.css']
})
export class SinupComponent implements OnInit {
 


  constructor( private _route:Router, private _http:HttpClient) { }
  singup:FormGroup|any;
  signuser:any;
  ngOnInit(): void {
    this.singup = new FormGroup({
      'fname': new FormControl(),
      'lname':new FormControl(),
      'email':new FormControl(),
      'phone':new FormControl(),
      'password': new FormControl()
    })
  }

  singupdata(singup:FormGroup){
    //console.log(this.singup.value);
    this.signuser = this.singup.value.fname
    this._http.post<any>("http://localhost:3000/signup", this.singup.value)
    .subscribe(res=>{
      alert('You are added successfully');
      this.singup.reset();
      this._route.navigate(['login']);
    }, err=>{
      alert('Somthing went wrong');
 
    })

  }

  sbtn(){
   
    this._route.navigate(['login']);
    //$('.form-box1').css('z-index', '99');
    $('.form-box').css('display','block');
    $('.form-box1').css('display','none');
  }



  
}
