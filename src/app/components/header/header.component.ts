import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotesService } from 'src/app/services/notes.service';
import { GetNotesComponent } from '../get-notes/get-notes.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

toggle:boolean=false
logout:boolean=false
constructor(private NotesService:NotesService,private GetNotesComponent:GetNotesComponent, private router:Router){}
headerValue:any=this.NotesService.filterValue;
searchedTitle:any;

setToggle(){
  this.toggle=!this.toggle
  console.log("toggle in header=",this.toggle);
  
}
setLogoutToggle(){
this.logout=!this.logout
}
logoutFn(){
localStorage.removeItem("fondooToken")
this.router.navigateByUrl("/login")
}
setNotes(){
  this.NotesService.filterValue="Notes";
  console.log("inside set archive", this.NotesService.filterValue);
  this.headerValue=this.NotesService.filterValue;
  this.GetNotesComponent.getNotesFn();
}
setArchive(){
  this.NotesService.filterValue="Archive";
  console.log("inside set archive", this.NotesService.filterValue);
  this.headerValue=this.NotesService.filterValue;
  this.GetNotesComponent.getNotesFn();
}
setTrash(){
  this.NotesService.filterValue="Trash";
  console.log("inside set archive", this.NotesService.filterValue);
  this.headerValue=this.NotesService.filterValue;
  this.GetNotesComponent.getNotesFn();
}
setSearch(){
  // this.NotesService.filterValue="Search";
  console.log("inside set search", this.NotesService.filterValue);
  // this.headerValue=this.NotesService.filterValue;
  this.NotesService.searchValue=this.searchedTitle;
  console.log("search value",this.NotesService.searchValue);
  if(this.searchedTitle){
  this.GetNotesComponent.getNotesFn();
  }else{
    // this.NotesService.filterValue="Notes";
    this.GetNotesComponent.getNotesFn();
  }
  
}
onSideNavScroll(event: { stopPropagation: () => void; }){ event.stopPropagation() }
ngOnInit(){}
}
