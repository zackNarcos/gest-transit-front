import {createFeatureSelector, createSelector, MemoizedSelector} from "@ngrx/store";
import {moduleFeatureKey, ModuleState} from "./module-store.reducer";
import {AppState} from "../../app-state";

export const selectModuleState: MemoizedSelector<AppState, ModuleState> = createFeatureSelector<ModuleState>(moduleFeatureKey);


const selectDestinations = createSelector(
  selectModuleState,
  (state: ModuleState) => state.destinations
);

const selectEmployees = createSelector(
  selectModuleState,
  (state: ModuleState) => state.employees
);

const selectOutColis = createSelector(
  selectModuleState,
  (state: ModuleState) => state.outColis
);

const selectInColis = createSelector(
  selectModuleState,
  (state: ModuleState) => state.inColis
);

const selectAllColis = createSelector(
  selectModuleState,
  (state: ModuleState) => state.allColis
);

const selectIsLoadMoreDestinations = createSelector(
  selectModuleState,
  (state: ModuleState) => state.isLoadMoreDestinations
);

const selectIsLoadMoreEmployees = createSelector(
  selectModuleState,
  (state: ModuleState) => state.isLoadMoreEmployees
);

const selectIsLoadMoreOutColis = createSelector(
  selectModuleState,
  (state: ModuleState) => state.isLoadMoreOutColis
);

const selectIsLoadMoreInColis = createSelector(
  selectModuleState,
  (state: ModuleState) => state.isLoadMoreInColis
);

const selectIsLoadMoreAllColis = createSelector(
  selectModuleState,
  (state: ModuleState) => state.isLoadMoreAllColis
);

const selectSelectedDestination = createSelector(
  selectModuleState,
  (state: ModuleState) => state.selectedDestination
);

const selectSelectedEmployee = createSelector(
  selectModuleState,
  (state: ModuleState) => state.selectedEmployee
);

const selectSelectedColis = createSelector(
  selectModuleState,
  (state: ModuleState) => state.selectedColis
);

const selectSelectedPays = createSelector(
  selectModuleState,
  (state: ModuleState) => state.selectedPays
);

const selectPays = createSelector(
  selectModuleState,
  (state: ModuleState) => state.pays
);

const selectIsLoadMorePays = createSelector(
  selectModuleState,
  (state: ModuleState) => state.isLoadMorePays
);

const selectUser = createSelector(
  selectModuleState,
  (state: ModuleState) => state.user
);

const selectIsLoadUser = createSelector(
  selectModuleState,
  (state: ModuleState) => state.isLoadUser
);

export const moduleStoreSelectors = {
  selectDestinations,
  selectEmployees,
  selectOutColis,
  selectInColis,
  selectAllColis,
  selectIsLoadMoreDestinations,
  selectIsLoadMoreEmployees,
  selectIsLoadMoreOutColis,
  selectIsLoadMoreInColis,
  selectIsLoadMoreAllColis,
  selectSelectedDestination,
  selectSelectedEmployee,
  selectSelectedColis,
  selectSelectedPays,
  selectPays,
  selectIsLoadMorePays,
  selectUser,
  selectIsLoadUser
}
