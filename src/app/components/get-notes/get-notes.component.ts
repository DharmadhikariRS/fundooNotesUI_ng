import { Component,OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
import { HeaderComponent } from '../header/header.component';
@Component({
  selector: 'app-get-notes',
  templateUrl: './get-notes.component.html',
  styleUrls: ['./get-notes.component.scss']
})
export class GetNotesComponent implements OnInit {
constructor(private notesService:NotesService){}
notes:any;
toggler:boolean=this.notesService.toggle;
getNotesFn(){
  console.log("after click on sidenav service=",this.notesService.filterValue)
  this.notesService.getNotes().subscribe({
    next:  (res:any)=>{console.log("response",res);
    if(!this.notesService.searchValue){
      
    if(this.notesService.filterValue==="Keep" || this.notesService.filterValue==="Notes"){
      this.notes=res.data.filter((val:any)=>val.isArchieved===false && val.isTrash===false)
    }else if(this.notesService.filterValue==="Archive"){
      this.notes=res.data.filter((val:any)=>val.isArchieved===true)
    }else if(this.notesService.filterValue==="Trash"){
      this.notes=res.data.filter((val:any)=>val.isTrash===true)
    // }else if(this.notesService.filterValue==="Search"){
    //   console.log("filtervalue in search",this.notesService.filterValue);
    //   console.log("search value in search",this.notesService.searchValue);
    //   this.notes=res.data.filter((val:any)=>val.title.includes(this.notesService.searchValue))
    // }
  }
}else{
  console.log("search value inside get notes else is",this.notesService.filterValue);
  console.log("search value inside get notes else is",this.notesService.searchValue);
  
    if(this.notesService.filterValue==="Keep" || this.notesService.filterValue==="Notes"){
      this.notes=res.data.filter((val:any)=>val.isArchieved===false && val.isTrash===false && val.title.includes(this.notesService.searchValue))
    }else if(this.notesService.filterValue==="Archive"){
      this.notes=res.data.filter((val:any)=>val.isArchieved===true && val.title.includes(this.notesService.searchValue))
    }else if(this.notesService.filterValue==="Trash"){
      this.notes=res.data.filter((val:any)=>val.isTrash===true&& val.title.includes(this.notesService.searchValue))
    }
  }

console.log("notes",this.notes)
    //  alert(res.message);
      },
      error:(e)=>{ alert(e.message);},
      complete: () => console.log('done'),

    })

}
ngOnInit(): void {
  console.log("inside oninit of getnotes");
  this.getNotesFn()
  console.log("toggle inside getnote",this.toggler);
}
}
