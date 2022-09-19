import { Component, OnChanges, SimpleChanges, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-json-form',
  templateUrl: './json-form.component.html',
  styleUrls: ['./json-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JsonFormComponent implements OnChanges {

  @Input() jsonFormData: any;
  public myForm: FormGroup = this.fb.group({});

  constructor( private fb: FormBuilder ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['jsonFormData'].firstChange){
      this.createForm(this.jsonFormData);
    }
  }

  createForm(controls: any): void{
    for (const control of controls) {
      this.myForm.addControl(control.name, this.fb.control(''));
    }
  }

  onSubmit(): void{
    console.log(this.myForm.value);
    
  }

}