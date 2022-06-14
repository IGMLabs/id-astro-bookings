import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormMessagesService } from 'src/app/core/forms/form-messages.service';
import { FormBase } from 'src/app/core/forms/form.base';

@Component({
  selector: 'app-template-control',
  templateUrl: './template.control.html',
  styleUrls: ['./template.control.css'],
  providers:[ {
    provide: NG_VALUE_ACCESSOR,
    useExisting:forwardRef(()=>TemplateControl),
    multi:true
  } ]
})
export class TemplateControl extends FormBase implements OnInit, ControlValueAccessor {
  @Input() public parentForm!:FormGroup;
  @Input() public formControlName:string='';
  @Input() public inputType:string='text';
  @Input() public label:string='Enter data';
  @Input() public placeholder:string='...';
  public touchedCallBack:any;
  public changeCallBack:any;
  public value:any;

  constructor(fms:FormMessagesService) {
    super(fms);
    this.form=this.parentForm;
  }



  public onKeyUp(event:any){
    const controlValue=event.target.value;
    this.value=controlValue;
    this.changeCallBack(this.value);
    this.touchedCallBack();
  }
  public writeValue(value: any): void {
    this.value=value;
  }
  public registerOnChange(changeCallBack: any): void {
    this.changeCallBack=changeCallBack
  }
  public registerOnTouched(touchedCallBack: any): void {
    this.touchedCallBack=touchedCallBack;
  }

  public ngOnInit(): void {
  }

}
