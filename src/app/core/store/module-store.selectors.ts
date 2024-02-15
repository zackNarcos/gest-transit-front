import {createFeatureSelector, createSelector, MemoizedSelector} from "@ngrx/store";
import {moduleFeatureKey, ModuleState} from "./module-store.reducer";
import {AppState} from "../../../app-state";

export const selectModuleState: MemoizedSelector<AppState, ModuleState> = createFeatureSelector<ModuleState>(moduleFeatureKey);

const selectModule = createSelector(
  selectModuleState,
  (state: ModuleState) => state.modules
);

const selectFilteredModule = createSelector(
  selectModuleState,
  (state: ModuleState) => state.filteredModules
);

const selectNumberOfModule = createSelector(
  selectModuleState,
  (state: ModuleState) => state.numberOfModules
);

const selectIsLoadMore = createSelector(
  selectModuleState,
    (state: ModuleState) => state.isLoadMore
);


export const moduleStoreSelectors = {
  selectModule,
  selectFilteredModule,
  selectNumberOfModule,
  selectIsLoadMore
}
