import {createAction, props} from "@ngrx/store";
import {User} from "../../shared/models/user";
import {Colis} from "../../shared/models/colis";
import {Params} from "@angular/router";
import {Reliquat} from "../../shared/models/reliquat";
// import {Matiere, MatiereParams} from "@mp/fe/ui";
export enum ModuleStoreActionsTypes {
  LoadDestinations = '[Module] Load Destinations',
  LoadDestinationsSuccess = '[Module] Load Destinations Success',
  LoadDestinationsFailure = '[Module] Load Destinations Failure',

  LoadEmployees = '[Module] Load Employees',
  LoadEmployeesSuccess = '[Module] Load Employees Success',
  LoadEmployeesFailure = '[Module] Load Employees Failure',

  LoadOutColis = '[Module] Load OutColis',
  LoadOutColisSuccess = '[Module] Load OutColis Success',
  LoadOutColisFailure = '[Module] Load OutColis Failure',

  LoadInColis = '[Module] Load InColis',
  LoadInColisSuccess = '[Module] Load InColis Success',
  LoadInColisFailure = '[Module] Load InColis Failure',

  LoadAllColis = '[Module] Load AllColis',
  LoadAllColisSuccess = '[Module] Load AllColis Success',
  LoadAllColisFailure = '[Module] Load AllColis Failure',


  SetSelectedDestination = '[Module] Set Selected Destination',
  SetSelectedEmployee = '[Module] Set Selected Employee',
  SetSelectedColis = '[Module] Set Selected Colis',

  addDestination = '[Module] Add Destination',
  addDestinationSuccess = '[Module] Add Destination Success',
  addDestinationFailure = '[Module] Add Destination Failure',

  addEmployee = '[Module] Add Employee',
  addEmployeeSuccess = '[Module] Add Employee Success',
  addEmployeeFailure = '[Module] Add Employee Failure',

  addColis = '[Module] Add Colis',
  addColisSuccess = '[Module] Add Colis Success',
  addColisFailure = '[Module] Add Colis Failure',

  updateDestination = '[Module] Update Destination',
  updateDestinationSuccess = '[Module] Update Destination Success',
  updateDestinationFailure = '[Module] Update Destination Failure',

  updateEmployee = '[Module] Update Employee',
  updateEmployeeSuccess = '[Module] Update Employee Success',
  updateEmployeeFailure = '[Module] Update Employee Failure',

  updateColis = '[Module] Update Colis',
  updateColisSuccess = '[Module] Update Colis Success',
  updateColisFailure = '[Module] Update Colis Failure',

  deleteDestination = '[Module] Delete Destination',
  deleteDestinationSuccess = '[Module] Delete Destination Success',
  deleteDestinationFailure = '[Module] Delete Destination Failure',

  deleteEmployee = '[Module] Delete Employee',
  deleteEmployeeSuccess = '[Module] Delete Employee Success',
  deleteEmployeeFailure = '[Module] Delete Employee Failure',

  deleteColis = '[Module] Delete Colis',
  deleteColisSuccess = '[Module] Delete Colis Success',
  deleteColisFailure = '[Module] Delete Colis Failure',

  clear = '[Module] Clear',

  loadPays = '[Module] Load Pays',
  loadPaysSuccess = '[Module] Load Pays Success',
  loadPaysFailure = '[Module] Load Pays Failure',

  addPays = '[Module] Add Pays',
  addPaysSuccess = '[Module] Add Pays Success',
  addPaysFailure = '[Module] Add Pays Failure',

  updatePays = '[Module] Update Pays',
  updatePaysSuccess = '[Module] Update Pays Success',
  updatePaysFailure = '[Module] Update Pays Failure',

  deletePays = '[Module] Delete Pays',
  deletePaysSuccess = '[Module] Delete Pays Success',
  deletePaysFailure = '[Module] Delete Pays Failure',

  setSelectedPays = '[Module] Set Selected Pays',

  getUser = '[Module] Get User',
  getUserSuccess = '[Module] Get User Success',
  getUserFailure = '[Module] Get User Failure',

  loadColisStat = '[Module] Load Colis Stat',
  loadColisStatSuccess = '[Module] Load Colis Stat Success',
  loadColisStatFailure = '[Module] Load Colis Stat Failure',

  addColisReliquat = '[Module] Add Colis Reliquat',
  addColisReliquatSuccess = '[Module] Add Colis Reliquat Success',
  addColisReliquatFailure = '[Module] Add Colis Reliquat Failure',

  getColisReliquat = '[Module] Get Colis Reliquat',
  getColisReliquatSuccess = '[Module] Get Colis Reliquat Success',
  getColisReliquatFailure = '[Module] Get Colis Reliquat Failure',

  getColisReliquatByMonth = '[Module] Get Colis Reliquat By Month',
  getColisReliquatByMonthSuccess = '[Module] Get Colis Reliquat By Month Success',
  getColisReliquatByMonthFailure = '[Module] Get Colis Reliquat By Month Failure',

}


const loadDestinations = createAction(
  ModuleStoreActionsTypes.LoadDestinations,
);

const loadDestinationsSuccess = createAction(
  ModuleStoreActionsTypes.LoadDestinationsSuccess,
  props<{ destinations: [] }>()
);

const loadDestinationsFailure = createAction(
  ModuleStoreActionsTypes.LoadDestinationsFailure,
  props<{ error: any }>()
);

const loadEmployees = createAction(
  ModuleStoreActionsTypes.LoadEmployees,
);

const loadEmployeesSuccess = createAction(
  ModuleStoreActionsTypes.LoadEmployeesSuccess,
  props<{ employees: [] }>()
);

const loadEmployeesFailure = createAction(
  ModuleStoreActionsTypes.LoadEmployeesFailure,
  props<{ error: any }>()
);

const loadOutColis = createAction(
  ModuleStoreActionsTypes.LoadOutColis,
  props<{ param: Params }>()
);

const loadOutColisSuccess = createAction(
  ModuleStoreActionsTypes.LoadOutColisSuccess,
  props<{ outColis: Colis[] }>()
);

const loadOutColisFailure = createAction(
  ModuleStoreActionsTypes.LoadOutColisFailure,
  props<{ error: any }>()
);

const loadInColis = createAction(
  ModuleStoreActionsTypes.LoadInColis,
  props<{ param: Params }>()
);

const loadInColisSuccess = createAction(
  ModuleStoreActionsTypes.LoadInColisSuccess,
  props<{ inColis: Colis[] }>()
);

const loadInColisFailure = createAction(
  ModuleStoreActionsTypes.LoadInColisFailure,
  props<{ error: any }>()
);

const loadAllColis = createAction(
  ModuleStoreActionsTypes.LoadAllColis,
  props<{ param: Params }>()
);

const loadAllColisSuccess = createAction(
  ModuleStoreActionsTypes.LoadAllColisSuccess,
  props<{ allColis: Colis[] }>()
);

const loadAllColisFailure = createAction(
  ModuleStoreActionsTypes.LoadAllColisFailure,
  props<{ error: any }>()
);

const setSelectedDestination = createAction(
  ModuleStoreActionsTypes.SetSelectedDestination,
  props<{ destination: any }>()
);

const setSelectedEmployee = createAction(
  ModuleStoreActionsTypes.SetSelectedEmployee,
  props<{ employee: User }>()
);

const setSelectedColis = createAction(
  ModuleStoreActionsTypes.SetSelectedColis,
  props<{ colis: any }>()
);

const addDestination = createAction(
  ModuleStoreActionsTypes.addDestination,
  props<{ destination: any }>()
);

const addDestinationSuccess = createAction(
  ModuleStoreActionsTypes.addDestinationSuccess,
  props<{ destination: any }>()
);

const addDestinationFailure = createAction(
  ModuleStoreActionsTypes.addDestinationFailure,
  props<{ error: any }>()
);

const addEmployee = createAction(
  ModuleStoreActionsTypes.addEmployee,
  props<{ employee: any }>()
);

const addEmployeeSuccess = createAction(
  ModuleStoreActionsTypes.addEmployeeSuccess,
  props<{ employee: any }>()
);

const addEmployeeFailure = createAction(
  ModuleStoreActionsTypes.addEmployeeFailure,
  props<{ error: any }>()
);

const addColis = createAction(
  ModuleStoreActionsTypes.addColis,
  props<{ colis: any }>()
);

const addColisSuccess = createAction(
  ModuleStoreActionsTypes.addColisSuccess,
  props<{ colis: any }>()
);

const addColisFailure = createAction(
  ModuleStoreActionsTypes.addColisFailure,
  props<{ error: any }>()
);

const updateDestination = createAction(
  ModuleStoreActionsTypes.updateDestination,
  props<{ destination: any }>()
);

const updateDestinationSuccess = createAction(
  ModuleStoreActionsTypes.updateDestinationSuccess,
  props<{ destination: any }>()
);

const updateDestinationFailure = createAction(
  ModuleStoreActionsTypes.updateDestinationFailure,
  props<{ error: any }>()
);

const updateEmployee = createAction(
  ModuleStoreActionsTypes.updateEmployee,
  props<{ employee: any }>()
);

const updateEmployeeSuccess = createAction(
  ModuleStoreActionsTypes.updateEmployeeSuccess,
  props<{ employee: any }>()
);

const updateEmployeeFailure = createAction(
  ModuleStoreActionsTypes.updateEmployeeFailure,
  props<{ error: any }>()
);

const updateColis = createAction(
  ModuleStoreActionsTypes.updateColis,
  props<{ colis: any }>()
);

const updateColisSuccess = createAction(
  ModuleStoreActionsTypes.updateColisSuccess,
  props<{ colis: any }>()
);

const updateColisFailure = createAction(
  ModuleStoreActionsTypes.updateColisFailure,
  props<{ error: any }>()
);

const deleteDestination = createAction(
  ModuleStoreActionsTypes.deleteDestination,
  props<{ destination: any }>()
);

const deleteDestinationSuccess = createAction(
  ModuleStoreActionsTypes.deleteDestinationSuccess,
  props<{ destination: any }>()
);

const deleteDestinationFailure = createAction(
  ModuleStoreActionsTypes.deleteDestinationFailure,
  props<{ error: any }>()
);

const deleteEmployee = createAction(
  ModuleStoreActionsTypes.deleteEmployee,
  props<{ employee: any }>()
);

const deleteEmployeeSuccess = createAction(
  ModuleStoreActionsTypes.deleteEmployeeSuccess,
  props<{ employee: any }>()
);

const deleteEmployeeFailure = createAction(
  ModuleStoreActionsTypes.deleteEmployeeFailure,
  props<{ error: any }>()
);

const deleteColis = createAction(
  ModuleStoreActionsTypes.deleteColis,
  props<{ colis: any }>()
);

const deleteColisSuccess = createAction(
  ModuleStoreActionsTypes.deleteColisSuccess,
  props<{ colis: any }>()
);

const deleteColisFailure = createAction(
  ModuleStoreActionsTypes.deleteColisFailure,
  props<{ error: any }>()
);

const clear = createAction(
  ModuleStoreActionsTypes.clear,
);

const loadPays = createAction(
  ModuleStoreActionsTypes.loadPays,
);

const loadPaysSuccess = createAction(
  ModuleStoreActionsTypes.loadPaysSuccess,
  props<{ pays: [] }>()
);

const loadPaysFailure = createAction(
  ModuleStoreActionsTypes.loadPaysFailure,
  props<{ error: any }>()
);

const addPays = createAction(
  ModuleStoreActionsTypes.addPays,
  props<{ pays: any }>()
);

const addPaysSuccess = createAction(
  ModuleStoreActionsTypes.addPaysSuccess,
  props<{ pays: any }>()
);

const addPaysFailure = createAction(
  ModuleStoreActionsTypes.addPaysFailure,
  props<{ error: any }>()
);

const updatePays = createAction(
  ModuleStoreActionsTypes.updatePays,
  props<{ pays: any }>()
);

const updatePaysSuccess = createAction(
  ModuleStoreActionsTypes.updatePaysSuccess,
  props<{ pays: any }>()
);

const updatePaysFailure = createAction(
  ModuleStoreActionsTypes.updatePaysFailure,
  props<{ error: any }>()
);

const deletePays = createAction(
  ModuleStoreActionsTypes.deletePays,
  props<{ pays: any }>()
);

const deletePaysSuccess = createAction(
  ModuleStoreActionsTypes.deletePaysSuccess,
  props<{ pays: any }>()
);

const deletePaysFailure = createAction(
  ModuleStoreActionsTypes.deletePaysFailure,
  props<{ error: any }>()
);

const setSelectedPays = createAction(
  ModuleStoreActionsTypes.setSelectedPays,
  props<{ pays: any }>()
);

const getUser = createAction(
  ModuleStoreActionsTypes.getUser,
);

const getUserSuccess = createAction(
  ModuleStoreActionsTypes.getUserSuccess,
  props<{ user: User }>()
);

const getUserFailure = createAction(
  ModuleStoreActionsTypes.getUserFailure,
  props<{ error: any }>()
);

const loadColisStat = createAction(
  ModuleStoreActionsTypes.loadColisStat,
  props<{ param: Params }>()
);

const loadColisStatSuccess = createAction(
  ModuleStoreActionsTypes.loadColisStatSuccess,
  props<{ colisStat: any }>()
);

const loadColisStatFailure = createAction(
  ModuleStoreActionsTypes.loadColisStatFailure,
  props<{ error: any }>()
);

const addColisReliquat = createAction(
  ModuleStoreActionsTypes.addColisReliquat,
  props<{ reliquat: Reliquat }>()
);

const addColisReliquatSuccess = createAction(
  ModuleStoreActionsTypes.addColisReliquatSuccess,
  props<{ reliquat: any }>()
);

const addColisReliquatFailure = createAction(
  ModuleStoreActionsTypes.addColisReliquatFailure,
  props<{ error: any }>()
);

const getColisReliquat = createAction(
  ModuleStoreActionsTypes.getColisReliquat,
  props<{ coli: string }>()
);

const getColisReliquatSuccess = createAction(
  ModuleStoreActionsTypes.getColisReliquatSuccess,
  props<{ reliquat: Reliquat }>()
);

const getColisReliquatFailure = createAction(
  ModuleStoreActionsTypes.getColisReliquatFailure,
  props<{ error: any }>()
);

const getColisReliquatByMonth = createAction(
  ModuleStoreActionsTypes.getColisReliquatByMonth,
  props<{ param: Params }>()
);

const getColisReliquatByMonthSuccess = createAction(
  ModuleStoreActionsTypes.getColisReliquatByMonthSuccess,
  props<{ reliquat: any }>()
);

const getColisReliquatByMonthFailure = createAction(
  ModuleStoreActionsTypes.getColisReliquatByMonthFailure,
  props<{ error: any }>()
);

export const ModuleActions = {
  loadDestinations,
  loadDestinationsSuccess,
  loadDestinationsFailure,
  loadEmployees,
  loadEmployeesSuccess,
  loadEmployeesFailure,
  loadOutColis,
  loadOutColisSuccess,
  loadOutColisFailure,
  loadInColis,
  loadInColisSuccess,
  loadInColisFailure,
  loadAllColis,
  loadAllColisSuccess,
  loadAllColisFailure,

  setSelectedDestination,
  setSelectedEmployee,
  setSelectedColis,
  addDestination,
  addDestinationSuccess,
  addDestinationFailure,
  addEmployee,
  addEmployeeSuccess,
  addEmployeeFailure,
  addColis,
  addColisSuccess,
  addColisFailure,
  updateDestination,
  updateDestinationSuccess,
  updateDestinationFailure,
  updateEmployee,
  updateEmployeeSuccess,
  updateEmployeeFailure,
  updateColis,
  updateColisSuccess,
  updateColisFailure,
  deleteDestination,
  deleteDestinationSuccess,
  deleteDestinationFailure,
  deleteEmployee,
  deleteEmployeeSuccess,
  deleteEmployeeFailure,
  deleteColis,
  deleteColisSuccess,
  deleteColisFailure,
  clear,
  loadPays,
  loadPaysSuccess,
  loadPaysFailure,
  addPays,
  addPaysSuccess,
  addPaysFailure,
  updatePays,
  updatePaysSuccess,
  updatePaysFailure,
  deletePays,
  deletePaysSuccess,
  deletePaysFailure,
  setSelectedPays,
  getUser,
  getUserSuccess,
  getUserFailure,

  loadColisStat,
  loadColisStatSuccess,
  loadColisStatFailure,

  addColisReliquat,
  addColisReliquatSuccess,
  addColisReliquatFailure,

  getColisReliquat,
  getColisReliquatSuccess,
  getColisReliquatFailure,

  getColisReliquatByMonth,
  getColisReliquatByMonthSuccess,
  getColisReliquatByMonthFailure,
};
