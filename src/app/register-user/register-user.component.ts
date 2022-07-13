import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { createPasswordStrengthValidator } from './shared/password-strength.validator';
import { createPasswordsMatchValidator } from './shared/passwords-match.validator';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  userForm = this.makeUserForm();
  showForm = true;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }


  private makeUserForm() {
    return this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      passwords: this.fb.group({
        password: ['', [Validators.required, createPasswordStrengthValidator()]],
        verifyPassword: ['', [Validators.required]]
      }, {validators: [createPasswordsMatchValidator()]}),
    });
  }

  get emailFc() {
    return this.userForm.get('email') as FormControl;
  }
  get passwordsFc() {
    return this.userForm.get('passwords') as FormControl;
  }
  get passwordFc() {
    return this.userForm.get('passwords.password') as FormControl;
  }

}
