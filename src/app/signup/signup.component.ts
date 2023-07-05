import { Component ,OnInit} from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{
  registerForm !: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private userService:UserService) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
        
          firstName: ['', [Validators.required,Validators.pattern("^[A-Z]{1}[a-z A-Z]{2,}$")]],
          lastName: ['',[Validators.required,Validators.pattern("^[A-Z]{1}[a-z A-Z]{2,}$")]],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.pattern( "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$")]],
          confirmPassword: ['', Validators.required],
      });
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;
      let data={firstName:this.registerForm.value.firstName,
      lastName:this.registerForm.value.lastName,
    email:this.registerForm.value.email,
  password:this.registerForm.value.password}
console.log("dataaaaaa",this.registerForm.value);

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }else{
      
        this.userService.register(data).subscribe({
      next:  (res:any)=>{console.log("response",res);
       alert(res.message);
        },
        error:(e)=>{ alert(e.message);},
        complete: () => console.log('done'),

      })
       
      }
      // display form values on success
     
  }
}
