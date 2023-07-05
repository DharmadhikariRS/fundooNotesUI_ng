import { Injectable } from '@angular/core';
import {HttpService} from '../services/http.service'
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NotesService  {
  toggle:boolean=false;
  token:any;
  header:any;
  filterValue:string="Notes"
  searchValue:any;
  constructor(private httpservice:HttpService) { 
    this.token =localStorage.getItem('fondooToken')
     this.header = {
      headers:new HttpHeaders({
          'Content-type':'application/json',
           'Authorization':"Bearer"+" "+this.token
        })
      }
      
  }
public createNote(reqdata:any){
    console.log("token value",this.token)
  
    return this.httpservice.post('notes',reqdata,true,this.header);
   }

   public updateNote(reqdata:any,id:any){
    console.log("token value",this.token)
  
    return this.httpservice.put(`notes/${id}`,reqdata,true,this.header);
   }
   public getNotes(){
    console.log("token value",this.token)
  
    return this.httpservice.get('notes',true,this.header);
   }
   public archiveNote(id: any){
    console.log("token value",this.token)
  
    return this.httpservice.put(`notes/${id}/archive`,{},true,this.header);
   }

   public trashNote(id: any){
    console.log("token value",this.token)
  
    return this.httpservice.put(`notes/${id}/trash`,{},true,this.header);
   }
   public updateColor(reqdata:any,id: any){
    console.log("token value",this.token)
  
    return this.httpservice.put(`notes/${id}/updateColor`,reqdata,true,this.header);
   }
}
