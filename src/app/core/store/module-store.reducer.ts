// import {Matiere} from "@mp/fe/ui";
import {Action, createReducer, on} from "@ngrx/store";
import {ModuleActions} from "./module-store.actions";
import {Destinations} from "../../shared/models/destinations";
import {User} from "../../shared/models/user";
import {Colis} from "../../shared/models/colis";
import {Pays} from "../../shared/models/pays";

export const moduleFeatureKey = 'matiere';
export interface ModuleState {
  destinations: Destinations[],
  employees: User[],
  outColis: Colis[],
  inColis: Colis[],
  allColis: Colis[],
  pays: Pays[],
  user: User,
  isLoadMoreDestinations: boolean,
  isLoadMoreEmployees: boolean,
  isLoadMoreOutColis: boolean,
  isLoadMoreInColis: boolean,
  isLoadMoreAllColis: boolean,
  isLoadMorePays: boolean,
  selectedDestination: any,
  selectedEmployee: User,
  selectedColis: Colis,
  selectedPays: Pays,
  error?: any;
  isLoadUser: boolean;
  colisStat: any[];
  isLoadColisStat: boolean;
}

export const ModuleInitialState: ModuleState = {
  destinations: [],
  employees: [],
  outColis: [],
  inColis: [],
  allColis: [],
  pays: [],
  user: null,
  isLoadMoreDestinations: true,
  isLoadMoreEmployees: true,
  isLoadMoreOutColis: true,
  isLoadMoreInColis: true,
  isLoadMoreAllColis: true,
  isLoadMorePays: true,
  selectedDestination: null,
  selectedEmployee: null,
  selectedColis: null,
  selectedPays: null,
  error: null,
  isLoadUser: true,
  colisStat: [],
  isLoadColisStat: true
}

const reducer = createReducer(
  ModuleInitialState,
    on(ModuleActions.loadDestinations, state => ({...state, isLoadMoreDestinations: true})),
    on(ModuleActions.loadDestinationsSuccess, (state, {destinations}) => ({...state, destinations, isLoadMoreDestinations: false})),
    on(ModuleActions.loadDestinationsFailure, (state, {error}) => ({...state, error, isLoadMoreDestinations: false})),
    on(ModuleActions.loadEmployees, state => ({...state, isLoadMoreEmployees: true})),
    on(ModuleActions.loadEmployeesSuccess, (state, {employees}) => ({...state, employees, isLoadMoreEmployees: false})),
    on(ModuleActions.loadEmployeesFailure, (state, {error}) => ({...state, error, isLoadMoreEmployees: false})),
    on(ModuleActions.loadOutColis, state => ({...state, isLoadMoreOutColis: true})),
    on(ModuleActions.loadOutColisSuccess, (state, {outColis}) => ({...state, outColis, isLoadMoreOutColis: false})),
    on(ModuleActions.loadOutColisFailure, (state, {error}) => ({...state, error, isLoadMoreOutColis: false})),
    on(ModuleActions.loadInColis, state => ({...state, isLoadMoreInColis: true})),
    on(ModuleActions.loadInColisSuccess, (state, {inColis}) => ({...state, inColis, isLoadMoreInColis: false})),
    on(ModuleActions.loadInColisFailure, (state, {error}) => ({...state, error, isLoadMoreInColis: false})),
    on(ModuleActions.loadAllColis, state => ({...state, isLoadMoreAllColis: true})),
    on(ModuleActions.loadAllColisSuccess, (state, {allColis}) => ({...state, allColis, isLoadMoreAllColis: false})),
    on(ModuleActions.loadAllColisFailure, (state, {error}) => ({...state, error, isLoadMoreAllColis: false})),
    on(ModuleActions.setSelectedDestination, (state, {destination}) => ({...state, selectedDestination: destination})),
    on(ModuleActions.setSelectedEmployee, (state, {employee}) => ({...state, selectedEmployee: employee})),
    on(ModuleActions.setSelectedColis, (state, {colis}) => ({...state, selectedColis: colis})),
    on(ModuleActions.deleteDestination, state => ({...state})),
    on(ModuleActions.deleteDestinationSuccess, state => ({...state})),
    on(ModuleActions.deleteDestinationFailure, (state, {error}) => ({...state, error})),
    on(ModuleActions.deleteEmployee, state => ({...state})),
    on(ModuleActions.deleteEmployeeSuccess, state => ({...state})),
    on(ModuleActions.deleteEmployeeFailure, (state, {error}) => ({...state, error})),
    on(ModuleActions.deleteColis, state => ({...state})),
    on(ModuleActions.deleteColisSuccess, state => ({...state})),
    on(ModuleActions.deleteColisFailure, (state, {error}) => ({...state, error})),
    on(ModuleActions.updateDestination, state => ({...state})),
    on(ModuleActions.updateDestinationSuccess, state => ({...state})),
    on(ModuleActions.updateDestinationFailure, (state, {error}) => ({...state, error})),
    on(ModuleActions.updateEmployee, state => ({...state})),
    on(ModuleActions.updateEmployeeSuccess, state => ({...state})),
    on(ModuleActions.updateEmployeeFailure, (state, {error}) => ({...state, error})),
    on(ModuleActions.updateColis, state => ({...state})),
    on(ModuleActions.updateColisSuccess, state => ({...state})),
    on(ModuleActions.updateColisFailure, (state, {error}) => ({...state, error})),
    on(ModuleActions.addDestination, state => ({...state})),
    on(ModuleActions.addDestinationSuccess, state => ({...state})),
    on(ModuleActions.addDestinationFailure, (state, {error}) => ({...state, error})),
    on(ModuleActions.addEmployee, state => ({...state})),
    on(ModuleActions.addEmployeeSuccess, state => ({...state})),
    on(ModuleActions.addEmployeeFailure, (state, {error}) => ({...state, error})),
    on(ModuleActions.addColis, state => ({...state})),
    on(ModuleActions.addColisSuccess, state => ({...state})),
    on(ModuleActions.addColisFailure, (state, {error}) => ({...state, error})),
    //reset state
    on(ModuleActions.clear, state => ({...ModuleInitialState})),
    on(ModuleActions.loadPays, state => ({...state, isLoadMorePays: true})),
    on(ModuleActions.loadPaysSuccess, (state, {pays}) => ({...state, pays, isLoadMorePays: false})),
    on(ModuleActions.loadPaysFailure, (state, {error}) => ({...state, error, isLoadMorePays: false})),
    on(ModuleActions.setSelectedPays, (state, {pays}) => ({...state, selectedPays: pays})),
    on(ModuleActions.deletePays, state => ({...state})),
    on(ModuleActions.deletePaysSuccess, state => ({...state})),
    on(ModuleActions.deletePaysFailure, (state, {error}) => ({...state, error})),
    on(ModuleActions.updatePays, state => ({...state})),
    on(ModuleActions.updatePaysSuccess, state => ({...state})),
    on(ModuleActions.updatePaysFailure, (state, {error}) => ({...state, error})),
    on(ModuleActions.addPays, state => ({...state})),
    on(ModuleActions.addPaysSuccess, state => ({...state})),
    on(ModuleActions.addPaysFailure, (state, {error}) => ({...state, error})),
    on(ModuleActions.deletePays, state => ({...state})),
    on(ModuleActions.deletePaysSuccess, state => ({...state})),
    on(ModuleActions.deletePaysFailure, (state, {error}) => ({...state, error})),
    on(ModuleActions.getUser, state => ({...state, isLoadUser: true})),
    on(ModuleActions.getUserSuccess, (state, {user}) => ({...state, user, isLoadUser: false})),
    on(ModuleActions.getUserFailure, (state, {error}) => ({...state, error, isLoadUser: false})),
    on(ModuleActions.loadColisStat, state => ({...state, isLoadColisStat: true})),
    on(ModuleActions.loadColisStatSuccess, (state, {colisStat}) => ({...state, colisStat, isLoadColisStat: false})),
    on(ModuleActions.loadColisStatFailure, (state, {error}) => ({...state, error, isLoadColisStat: false})),
);

export function moduleReducer(state: ModuleState | undefined, action: Action) {
  return reducer(state, action);
}
