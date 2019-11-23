import { Component, NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

@NgModule(
  {
    imports: [
      FormsModule
    ]
  }
)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  newNote : string;
  noteId : number;
  notes: any[];
  title = 'angular-todo-list';
  editStatus: boolean = false;

  constructor(){

  }

  ngOnInit(){
    this.notes = [
      {
        id: 1,
        note: "my first note"
      },
      {
        id: 2,
        note: "my second note"
      },
      {
        id: 3,
        note: "my third note"
      }
    ]

  }
  submitNote(){
    if(this.newNote){
      this.notes.push(
        {
          id: this.notes.length+1,
          note: this.newNote
        }
      )
      this.newNote = ""
    }
    else {
      alert("please add note")
    }
  }

  editNote(id: number){
    this.newNote = this.notes.filter(x => x.id == id)[0].note; 
    this.noteId = id; 
    this.editStatus = true;

  }
  submitEditedNote(){
    this.notes[this.notes.findIndex(x => x.id == this.noteId)].note = this.newNote;
    this.editStatus = false;
    this.newNote = ''
  }

  deleteNote(id: number){
    var result = confirm("Sure you want to delete this?");
    if (result) {
      this.notes.splice(this.notes[this.notes.findIndex(x => x.id == id)], 1)
    }
  }

  cancelEdit(){
    this.newNote = '';
    this.editStatus = false;
  }
}
