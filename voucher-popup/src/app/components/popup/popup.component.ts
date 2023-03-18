import { Component, Inject, SimpleChanges } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { VoucherService } from 'src/app/services/voucher/voucher.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog'

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {
  isIdentified = false
  changess:any =''
  alert = false
  voucherGroup!: FormGroup
  constructor(private formBuilder: FormBuilder,private dialog:MatDialog, private voucherService: VoucherService, @Inject(MAT_DIALOG_DATA) private data: any, private dialguRef:MatDialogRef<PopupComponent>  ){}

  ngOnInit(): void {
    this.voucherGroup = this.formBuilder.group({
      voucherId:['',Validators.required]
    })
    this.isIdentified = this.data.isIdentified
    this.voucherGroup.controls['voucherId'].setValue(this.data.voucherId)
  }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.changess = changes
    console.log(this.changess)
    this.isIdentified = true
  }

  topup(){
    let params ={title: this.voucherGroup.controls['voucherId'].value,
    userId: 1}
    // if (().length() > 0 ){
      let value = ''
      value=this.voucherGroup.controls['voucherId'].value
    console.log((this.voucherGroup.controls['voucherId'].value),value.length)
    if ((this.voucherGroup.controls['voucherId'].value).length > 0 ){
      this.voucherService.postVoucher(params).subscribe(res =>{
        console.log(res)
        this.dialguRef.close()
      })  
    }
    else{
      this.alert = true
    }
  }

}
