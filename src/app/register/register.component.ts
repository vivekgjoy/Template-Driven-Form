import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  @ViewChild('vivekForm') user: NgForm;

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.init();
  }

  init() {
    this.form = this.fb.group({
      // name: ['', [Validators.required]],
      mail: ['', [Validators.required, Validators.email]],
      pass: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
          ),
        ],
      ],
    });
  }

  @ViewChild('vivekForm') uf: NgForm;

  setDefaultValue() {
    this.uf.setValue({
      name: 'vivek',
      email: 'Vivek@gmail.com',
      pass: 'Storm@123',
      confirmpass: 'Storm@123',
    });
  }

  patchValue() {
    this.uf.form.patchValue({
      name: 'varun',
      mail: 'varun@gmail.com',
      pass: '',
      confirmpass: '',
    });
  }

  ngOnInit(): void {}
  onSubmit(userForm: NgForm) {
    console.log('user', userForm);
    console.log('value', userForm.form.value);
  }
}
