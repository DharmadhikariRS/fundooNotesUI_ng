import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthguardService } from "src/app/services/authguard.service";

@Injectable({
  providedIn:'root'
})
export class authguard implements CanActivate{
  
  constructor(public AuthguardService:AuthguardService,private router:Router){
    
  }
  canActivate(): any  {
      if(!this.AuthguardService.gettoken()){
        alert("Please login to check notes")
this.router.navigateByUrl("/login")
      }else{
        return this.AuthguardService.gettoken();
      }
  }
}