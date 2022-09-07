import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircuitsComponent } from './circuits.component';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';

@NgModule({
  imports: [CommonModule, NavbarModule],
  declarations: [CircuitsComponent],
})
export class CircuitsModule {}
