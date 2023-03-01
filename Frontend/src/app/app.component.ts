import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend';
  form!: FormGroup;

  ngOnInit(): void {

    this.form = new FormGroup(
      {
        message: new FormControl(null, [
          Validators.required
        ])
      }
    )

  }

  chats = [
    {
      user: "gpt",
      message: "How can I help you today?",
    },

    {
      user: "me",
      message: "I wanted to use chatgpt today",
    },
  ]

  onSubmit() {
  this.chats.push({user:"me",message:this.form.value.message})   

 

  }

}
