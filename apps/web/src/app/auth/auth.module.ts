import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '@ent2022/material';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [LoginComponent]
})
export class AuthModule {}
