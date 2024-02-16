import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {moduleStoreSelectors, selectModuleState} from "./module-store.selectors";
import {ModuleActions} from "./module-store.actions";
// import {MatiereParams} from "@mp/fe/ui";


@Injectable({
  providedIn: 'root'
})
export class ModuleStoreService {

  constructor(
    private readonly store: Store
  ) {
    this.store = store;
  }

  loadDestinations() { this.store.dispatch(ModuleActions.loadDestinations()); }
  loadEmployees() { this.store.dispatch(ModuleActions.loadEmployees()); }
  loadOutColis() { this.store.dispatch(ModuleActions.loadOutColis()); }
  loadInColis() { this.store.dispatch(ModuleActions.loadInColis()); }
  loadAllColis() { this.store.dispatch(ModuleActions.loadAllColis()); }
  setSelectedDestination(destination: any) { this.store.dispatch(ModuleActions.setSelectedDestination({destination})); }
  setSelectedEmployee(employee: any) { this.store.dispatch(ModuleActions.setSelectedEmployee({employee})); }
  setSelectedColis(colis: any) { this.store.dispatch(ModuleActions.setSelectedColis({colis})); }

  selectModuleState() { return this.store.select(selectModuleState); }
  selectDestinations() { return this.store.select(moduleStoreSelectors.selectDestinations); }
  selectEmployees() { return this.store.select(moduleStoreSelectors.selectEmployees); }
  selectOutColis() { return this.store.select(moduleStoreSelectors.selectOutColis); }
  selectInColis() { return this.store.select(moduleStoreSelectors.selectInColis); }
  selectAllColis() { return this.store.select(moduleStoreSelectors.selectAllColis); }
  selectIsLoadMoreDestinations() { return this.store.select(moduleStoreSelectors.selectIsLoadMoreDestinations); }
  selectIsLoadMoreEmployees() { return this.store.select(moduleStoreSelectors.selectIsLoadMoreEmployees); }
  selectIsLoadMoreOutColis() { return this.store.select(moduleStoreSelectors.selectIsLoadMoreOutColis); }
  selectIsLoadMoreInColis() { return this.store.select(moduleStoreSelectors.selectIsLoadMoreInColis); }
  selectIsLoadMoreAllColis() { return this.store.select(moduleStoreSelectors.selectIsLoadMoreAllColis); }
  selectSelectedDestination() { return this.store.select(moduleStoreSelectors.selectSelectedDestination); }
  selectSelectedEmployee() { return this.store.select(moduleStoreSelectors.selectSelectedEmployee); }
  selectSelectedColis() { return this.store.select(moduleStoreSelectors.selectSelectedColis); }
  deleteDestination(destination: any) { this.store.dispatch(ModuleActions.deleteDestination({destination})); }
  deleteEmployee(employee: any) { this.store.dispatch(ModuleActions.deleteEmployee({employee})); }
  deleteColis(colis: any) { this.store.dispatch(ModuleActions.deleteColis({colis})); }
  addDestination(destination: any) { this.store.dispatch(ModuleActions.addDestination({destination})); }
  addEmployee(employee: any) { this.store.dispatch(ModuleActions.addEmployee({employee})); }
  addColis(colis: any) { this.store.dispatch(ModuleActions.addColis({colis})); }
  updateDestination(destination: any) { this.store.dispatch(ModuleActions.updateDestination({destination})); }
  updateEmployee(employee: any) { this.store.dispatch(ModuleActions.updateEmployee({employee})); }
  updateColis(colis: any) { this.store.dispatch(ModuleActions.updateColis({colis})); }
  addPays(pays: any) { this.store.dispatch(ModuleActions.addPays({pays})); }
  loadPays() { this.store.dispatch(ModuleActions.loadPays()); }
  selectSelectedPays() { return this.store.select(moduleStoreSelectors.selectSelectedPays); }
  selectPays() { return this.store.select(moduleStoreSelectors.selectPays); }
  selectIsLoadMorePays() { return this.store.select(moduleStoreSelectors.selectIsLoadMorePays); }
  deletePays(pays: any) { this.store.dispatch(ModuleActions.deletePays({pays})); }
  updatePays(pays: any) { this.store.dispatch(ModuleActions.updatePays({pays})); }
  clear() { this.store.dispatch(ModuleActions.clear()); }



}
