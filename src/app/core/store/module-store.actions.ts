import {createAction, props} from "@ngrx/store";
import {Matiere, MatiereParams} from "@mp/fe/ui";
export enum ModuleStoreActionsTypes {
  LoadModule = '[Module] Load Modules',
  LoadModuleSuccess = '[Module] Load Modules Success',
  LoadModuleFailure = '[Module] Load Modules Failure',

  filterModule = '[Module] Filter Modules',
  filterModuleSuccesss = '[Module] Filter Modules Success',
  filterModuleFailure = '[Module] Filter Modules Failure',
}


const loadModule = createAction(
  ModuleStoreActionsTypes.LoadModule,
  props<{ id: number }>()
);

const loadModuleSuccess = createAction(
  ModuleStoreActionsTypes.LoadModuleSuccess,
  props<{ modules: Matiere[] }>()
);

const loadModuleFailure = createAction(
  ModuleStoreActionsTypes.LoadModuleFailure,
  props<{ error: any }>()
);

const filterModule = createAction(
    ModuleStoreActionsTypes.filterModule,
  props<{ search: string }>()
)

const filterModuleSuccess = createAction(
  ModuleStoreActionsTypes.filterModuleSuccesss,
  props<{ modules: any }>()
)

const filterModuleFailure = createAction(
  ModuleStoreActionsTypes.filterModuleFailure,
  props<{ error: any }>()
)

export const ModuleActions = {
  loadModule,
  loadModuleSuccess,
  loadModuleFailure,
    filterModule,
    filterModuleSuccess,
    filterModuleFailure
}
