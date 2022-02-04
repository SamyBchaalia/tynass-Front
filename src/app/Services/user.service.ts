import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FormGroup } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private dbPath = '/users';
  usersList: AngularFireList<any> = null;

  constructor(private db: AngularFireDatabase) {
    this.usersList = db.list(this.dbPath);
    
   }

   addUser(user: any): any {
    return this.usersList.push(user)
  }

  public sendEmail(form:FormGroup) {
    const formEmail = {
      fullname:form.get('fullname').value,
      email:form.get('email').value,
    }
    emailjs.send(
      'service_p7zab4b',
      'template_abrb3wt',
      formEmail,
      'user_HmvUfrtZItEClcUM6F1dO')
      .then((result) => {
        this.addUser(form.value);
        form.reset();
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }
}
