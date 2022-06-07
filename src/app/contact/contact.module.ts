import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactPage } from './contact.page';
import { ContactForm } from './contact.form';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ContactPage, ContactForm],
  imports: [CommonModule, ContactRoutingModule, SharedModule],
})
export class ContactModule {}
