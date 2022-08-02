import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WidgetsComponent } from './widgets.component';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import * as fromWidget from './widget.reducer';
import { EffectsModule } from '@ngrx/effects';
import { WidgetsEffects } from './widgets.effects';

import { WidgetCardComponent } from './widget-card/widget-card.component';


const routes: Routes = [
  { path: '', component: WidgetsComponent }
];

@NgModule({
  declarations: [
    WidgetsComponent,
    WidgetCardComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(fromWidget.widgetsFeatureKey, fromWidget.reducer),
    EffectsModule.forFeature([WidgetsEffects])
  ]
})
export class WidgetsModule { }
