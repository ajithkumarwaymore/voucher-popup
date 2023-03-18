import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from './components/popup/popup.component';
import { VoucherService } from './services/voucher/voucher.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isIdentified =false
  voucherId = ''
  title = 'voucher-popup';
  constructor(private dialog: MatDialog, private voucherService: VoucherService){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getVouchers()
  }
  public getVouchers(){
    this.voucherService.getVoucher().subscribe(res => {
      console.log(res)
      if (res){
        this.isIdentified =true
        this.voucherId = res.id
      }
      this.openDialogue()
    },
    err => {
      this.openDialogue()
    })
  }

  private openDialogue(){
      this.dialog.open(PopupComponent, {
      height:'auto',
      width:'350px',
      data:{
        voucherId:this.voucherId,
        isIdentified: this.isIdentified
      }
    })
  }
}
