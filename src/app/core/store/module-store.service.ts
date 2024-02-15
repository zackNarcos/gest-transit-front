import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {moduleStoreSelectors, selectModuleState} from "./module-store.selectors";
import {ModuleActions} from "./module-store.actions";
import {MatiereParams} from "@mp/fe/ui";


@Injectable({
  providedIn: 'root'
})
export class ModuleStoreService {

  constructor(
    private readonly store: Store
  ) {
    this.store = store;
  }

  loadAllModules = (periodId: number) => this.store.dispatch(ModuleActions.loadModule({id: periodId}));
  getModules = () => this.store.select(moduleStoreSelectors.selectModule);
  getFilteredModules = () => this.store.select(moduleStoreSelectors.selectFilteredModule);
  getIsLoadMore = () => this.store.select(moduleStoreSelectors.selectIsLoadMore);
  getNumberOfModule = () =>this.store.select(moduleStoreSelectors.selectNumberOfModule);
  filterModules = (search: string) => this.store.dispatch(ModuleActions.filterModule({search}));
}
