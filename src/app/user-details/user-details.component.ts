import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

//Variables
public ddlList=[{'id':1,'text':"AdminUser1"},{'id':2,'text':"AdminUser2"},{'id':3,'text':"AdminUser3"}];


ddlModel;
selectedText:string;





  constructor() { }

  ngOnInit() {
    this.SelectionChange(this.ddlList[0]);//Setting default value on page load
  }

 
  




  //On selection change in dropDown
  SelectionChange(object: any){
         var selectedVal=object.id;
        this.selectedText=object.text;
        this.ddlModel=object.id;

  }



  
}
