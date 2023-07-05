import { Component, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { NotesService } from 'src/app/services/notes.service';
import { GetNotesComponent } from '../get-notes/get-notes.component';
@Component({
  selector: 'app-update-dialog-box',
  templateUrl: './update-dialog-box.component.html',
  styleUrls: ['./update-dialog-box.component.scss']
})
export class UpdateDialogBoxComponent {
  title:any;
  description:any;
  noteid:any;
  constructor(
    public dialogRef: MatDialogRef<UpdateDialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,private notesService:NotesService,private GetNotesComponent:GetNotesComponent
  ) {
    this.title=data.arr.title
    this.description=data.arr.description
    this.noteid=data.arr.noteid
    console.log("data in dialog=",data.arr.title);
    
  }

  onNoClick(): void {
    this.notesService.updateNote({title:this.title,description:this.description},this.noteid).subscribe({
      next:  (res:any)=>{console.log("response",res);
   alert(res.message);
        },
        error:(e)=>{ alert(e.message);},
        complete: () => console.log('done'),
  
      })
    this.dialogRef.close();
  }
}
