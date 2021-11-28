import { StorageService } from './../../../../core/services/storage/storage.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import User from '../../interfaces/User';
import { USER_SAVE_KEY } from 'src/app/core/services/utils/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _storage: StorageService
  ) {}

  /**
     * Initialises the form
     */
   private initForm(): FormGroup{
    let email = '';

    return this._formBuilder.group({
        email: [email, [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
    });
}

  ngOnInit(): void {
    this.form = this.initForm();
  }

   /**
     * Gets called when user pressed login button. Checks if form is valid and if so,
     * sends login request to backend. If authentication is a success, stores tokens in local storage
     */
   public signUserIn(): void {
    if (!this.form) {
      return;
    }

    if (this.form.invalid) {
        alert('Fill in login data first');
        return;
    }

    const user = new User(1, 'email');
    this._storage.saveLocalObject(USER_SAVE_KEY, user);
    
    this._router.navigate(['']);
}


}
