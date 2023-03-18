import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog'

const materials = [
  MatDialogModule
]

@NgModule({
  declarations: [],
  imports: [
    materials
  ],
  exports:[ materials]
})
export class MaterialModule { }
