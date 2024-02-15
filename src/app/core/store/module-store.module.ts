import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {ModuleStoreEffects} from "./module-store.effects";
import {moduleFeatureKey, moduleReducer} from "./module-store.reducer";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(moduleFeatureKey, moduleReducer),
    EffectsModule.forFeature([ModuleStoreEffects]),
  ]
})
export class ModuleStoreModule { }
