import { Component,Input,OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { UpdateDialogBoxComponent } from '../update-dialog-box/update-dialog-box.component';
import { GetNotesComponent } from '../get-notes/get-notes.component';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit{
@Input() ChildMessage:any;
  // GetNotesComponent: any;
constructor(public dialog: MatDialog,private GetNotesComponent:GetNotesComponent){}
openDialog(arr:any): void {
  const dialogRef = this.dialog.open(UpdateDialogBoxComponent, {
    data:arr,
 
  });
// openDialog(arr:any): void {
//   const dialogRef = this.dialog.open(DialogBoxComponent, {
//     data:arr,
//   });
dialogRef.afterClosed().subscribe(result => {
  console.log("inside parent close");
  
  this.GetNotesComponent.getNotesFn()
});
}

ngOnInit(){
 console.log("notes array in display",this.ChildMessage);
}
}
