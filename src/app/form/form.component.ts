import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formGroup : FormGroup;
  constructor(private formbuild: FormBuilder) 
  { 
  }

  ngOnInit() {
    this.formGroup =this.formbuild.group({
      firstname: this.formbuild.control(''),
      lastname:[''],Email:[''],Age:[50]
    })
  }
onSumit(form: FormGroup){
   console.log(form);
}
  }


