import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule, MdButtonModule, MdCheckboxModule } from '@angular/material';


import { NewPersonalMessageComponent } from './new-personal-message/new-personal-message.component';
import { ReadPersonalMessageComponent } from './read-personal-message/read-personal-message.component';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    NewPersonalMessageComponent,
    ReadPersonalMessageComponent
  ],
  declarations: [
    NewPersonalMessageComponent,
    ReadPersonalMessageComponent
  ]
})
export class PersonalMessagingModule { }
