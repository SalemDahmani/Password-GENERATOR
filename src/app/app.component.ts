import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 length ;
 password;
 includeletters;
 includenumbers;
 includesymbols;
 constructor (){
   this.length = 0;
   this.password = "";
   this.includeletters = false;
   this.includenumbers = false;
   this.includesymbols = false;
 }

 OnButtonClick(){
    
     var generated_password =""
     const string_numbers = "0123456789"
     const string_letters = "aqwzsxedcrfvtgbyhnujiklompAQWZSXEDCRFVTGBYHNUJIKOLPM"
     const string_symbols = "<>&éç)_($*^!;:(-è_ç)?"
    if (this.includeletters){
      generated_password +=  string_letters
      
    }
    if (this.includenumbers){
      generated_password +=  string_numbers
    }
    if (this.includesymbols){
      generated_password +=  string_symbols
    }
     let generatedpassword = "";
    for(var  i = 0 ; i < this.length ; i++){
      const x = Math.floor (Math.random() * generated_password.length)
        generatedpassword += generated_password[x];
    }
    this.password = generatedpassword;
 }

 GetNewPassword(){
   return this.password
 }
 changed_letter(){
   this.includeletters = !this.includeletters;
 }
  changed_numbers(){
   this.includenumbers = !this.includenumbers;
 }
   changed_symbols(){
   this.includesymbols = !this.includesymbols;
 }
  get_length(value : string){
    var inted_length = parseInt (value,10);
    if (! isNaN(inted_length))
    {
     this.length = inted_length;
    }

  }
}
