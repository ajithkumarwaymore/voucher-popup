import { Component } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {
  isIdentified = true
  voucherGroup!: FormGroup
  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.voucherGroup = this.formBuilder.group({
      voucherId:''
    })
  }

}
