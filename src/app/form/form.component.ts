import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
formGroup : FormGroup;
  constructor(private formbuil: FormBuilder) 
  { 
  }

  ngOnInit() {
    this.formGroup =this.formbuil.group({
      firstname: this.formbuil.control(''),
      lastname:['']
    })
  }

}
