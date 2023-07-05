import { Component,OnInit } from '@angular/core';
import { CreateNoteComponent } from '../create-note/create-note.component';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-take-note2',
  templateUrl: './take-note2.component.html',
  styleUrls: ['./take-note2.component.scss']
})
export class TakeNote2Component  implements OnInit {
notesForm !: FormGroup;
constructor(private formBuilder: FormBuilder,private createNoteComponent: CreateNoteComponent){}
setToggle:any=this.createNoteComponent.setToggle();
ngOnInit() {
  this.notesForm = this.formBuilder.group({
    title: '',
    description: '',
   });
   console.log("inside onint",this.createNoteComponent.toggle);
}
get f() { return this.notesForm.controls; }

setData():any {
  // console.log("inside onsubmit",this.createNoteComponent.toggle);
 console.log("data",this.notesForm.value);
  this.setToggle()
}
}
