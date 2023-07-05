import { Component ,OnInit} from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit {
  loginForm !: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private userService:UserService,private router:Router) { }

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.pattern( "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$")]],
          
      });
  }
  get f() { return this.loginForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
 if (this.loginForm.invalid) {
        return;
    }else{
    
      this.userService.login(this.loginForm.value).subscribe({
    next: async (res:any)=>{console.log("response",res);
   await localStorage.setItem('fondooToken',res.data)
   alert(res.message);
   this.router.navigateByUrl("/dashboard/getnotes")
      },
      error:(e:any)=>{ alert("Wrong email id or password");},
      complete: () => console.log('done'),

    })
     
    }
  }
}
