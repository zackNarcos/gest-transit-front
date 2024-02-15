import {Matiere} from "@mp/fe/ui";
import {Action, createReducer, on} from "@ngrx/store";
import {ModuleActions} from "./module-store.actions";

export const moduleFeatureKey = 'matiere';
export interface ModuleState {
  modules: Matiere[],
  isLoadMore: boolean,
  filteredModules: Matiere[],
  numberOfModules: number,
  error?: any;
}

export const ModuleInitialState: ModuleState = {
  modules: [],
  isLoadMore: true,
  filteredModules: [],
  numberOfModules: 0,
  error: null,
}

const reducer = createReducer(
  ModuleInitialState,
    on(ModuleActions.loadModule, (state) => ({
      ...state,
      isLoadMore: true
    })),
    on(ModuleActions.loadModuleSuccess, (state, { modules }) => ({
      ...state,
      modules: modules,
      filteredModules: modules,
      numberOfModules: modules.length,
      isLoadMore: false,
      error: null
    })),
    on(ModuleActions.loadModuleFailure, (state, { error }) => ({
      ...state,
      isLoadMore: false,
      error: error
    })),
    on(ModuleActions.filterModule, (state, {search}) => ({
      ...state,
      isLoadMore: false,
      error: null
    })),
    on(ModuleActions.filterModuleSuccess, (state, { modules }) => ({
      ...state,
      filteredModules: modules,
      numberOfModules: modules.length,
      isLoadMore: false,
      error: null
    })),
    on(ModuleActions.filterModuleFailure, (state, { error }) => ({
      ...state,
      isLoadMore: false,
      error: error
    })),
);

export function moduleReducer(state: ModuleState | undefined, action: Action) {
  return reducer(state, action);
}
