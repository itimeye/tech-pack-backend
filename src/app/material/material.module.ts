import { NgModule } from '@angular/core';
import {MatDialogModule,MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog'

const MaterialComponents = [
  MatDialogModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents],
  providers: []
})
export class MaterialModule { }
