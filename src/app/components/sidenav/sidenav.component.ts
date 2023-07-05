import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  constructor(private NotesService:NotesService){}
toggle:boolean=this.NotesService.toggle;
ngOnInit(){}

}
