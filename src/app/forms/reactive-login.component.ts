import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'st-login',
  templateUrl: '/app/forms/reactive-login.component.html'
})
export class ReactiveLoginComponent {
  
  loginForm : FormGroup;

  constructor (private fb: FormBuilder ) {
    this.loginForm =  this.fb.group(
      {
        username : ["",Validators.required],
        password : ["",Validators.required]
      }
    )
  }
  
  onSubmit(): void{
    console.log( this.loginForm.controls["username"].value);
    // this.loginForm.setValue( { "username" : ""});
  }
}

