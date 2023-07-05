import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NotesService } from 'src/app/services/notes.service';
import { GetNotesComponent } from '../get-notes/get-notes.component';
@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent {
toggle:boolean=false;
  
setToggle(){
this.toggle=!this.toggle
console.log("inside create note toggle",this.toggle);
}

notesForm !: FormGroup;
constructor(private formBuilder: FormBuilder,private notesService:NotesService,private GetNotesComponent:GetNotesComponent){}

ngOnInit() {
  this.notesForm = this.formBuilder.group({
    title: '',
    description: '',
   });
 
}
get f() { return this.notesForm.controls; }

setData():any {
  // console.log("inside onsubmit",this.createNoteComponent.toggle);
 console.log("data",this.notesForm.value);
  this.setToggle()
  if(!(this.notesForm.value.title==="" && this.notesForm.value.title===""))
  this.notesService.createNote(this.notesForm.value).subscribe({
    next:  (res:any)=>{console.log("response",res);
     alert(res.message);
     this.GetNotesComponent.getNotesFn()
      },
      error:(e)=>{ alert(e.message);},
      complete: () => console.log('done'),

    })
}
}
