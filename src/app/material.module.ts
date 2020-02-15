import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatTableModule, MatToolbarModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatTableModule, MatToolbarModule],
  exports: [CommonModule, MatButtonModule, MatTableModule, MatToolbarModule],
})
export class MaterialModule { }