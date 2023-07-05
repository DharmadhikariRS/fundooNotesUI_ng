import { Component, Input } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
import { GetNotesComponent } from '../get-notes/get-notes.component';
@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})

export class IconsComponent {
  constructor(private NotesService:NotesService,private GetNotesComponent:GetNotesComponent ){}
  @Input() note:any;

  toggle:boolean=false;
  colorToggle:boolean=false;
  colors: Array<any> = [
    { code: '#fff', name: 'white' },
    { code: '#f28b82', name: 'red' },
    { code: '#fbbc04', name: 'orange' },
    { code: '#FFFF00', name: 'yellow' },
    { code: '#ccff90', name: 'green' },
    { code: '#a7ffeb', name: 'teal' },
    { code: '#cbf0f8', name: 'Blue' },
    { code: '#aecbfa', name: 'darkblue' },
    { code: '#d7aefb', name: 'purple' },
    { code: '#fdcfe8', name: 'pink' },
    { code: '#e6c9a8', name: 'brown' },
    { code: '#e8eaed', name: 'grey' }]

    colorObj:any={color:""}
  setToggle(){
    this.toggle=!this.toggle
  }
  setColorToggle(){
    
    
    this.colorToggle=!this.colorToggle
    console.log("inside color toggle",this.colorToggle);
  }
  setColour(color:any){
    this.colorObj.color=color;
console.log("inside setcolour api",color);
this.NotesService.updateColor(this.colorObj,this.note.noteid).subscribe({
  next:  (res:any)=>{console.log("response",res);
   alert(res.message);
   this.GetNotesComponent.getNotesFn()
    },
    error:(e)=>{ alert(e.message);},
    complete: () => console.log('done'),

  })
  }
  archiveNote(){
    console.log("note id is",this.note.noteid);
    
    this.NotesService.archiveNote(this.note.noteid).subscribe({
      next:  (res:any)=>{console.log("response",res);
       alert(res.message);
       this.GetNotesComponent.getNotesFn()
        },
        error:(e)=>{ alert(e.message);},
        complete: () => console.log('done'),
  
      })
  }
  deleteNote(){
    console.log("note id is",this.note.noteid);
    
    this.NotesService.trashNote(this.note.noteid).subscribe({
      next:  (res:any)=>{console.log("response",res);
       alert(res.message);
       this.GetNotesComponent.getNotesFn()
        },
        error:(e)=>{ alert(e.message);},
        complete: () => console.log('done'),
  
      })
  }

}
