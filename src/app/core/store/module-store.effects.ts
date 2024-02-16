import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ModuleStoreService} from "./module-store.service";
import {ModuleActions, ModuleStoreActionsTypes} from "./module-store.actions";
import {catchError, map, of, switchMap} from "rxjs";
import {take} from "rxjs/operators";
import {UserService} from "../services/user.service";
import {PaysService} from "../services/pays.service";
// import {MatiereService} from "@mp/fe/ui";

@Injectable()
export class ModuleStoreEffects {

  constructor(
    private actions$: Actions,
    private moduleStoreService: ModuleStoreService,
    private userService: UserService,
    private paysService: PaysService,
  ) {
  }

  loadEmployees$ = createEffect(() => this.actions$.pipe(
    ofType(ModuleActions.loadEmployees),
    switchMap(() => this.userService.getUsers()
      .pipe(
        map((employees: any) => {
          return ModuleActions.loadEmployeesSuccess({employees: employees})
        }),
        catchError((err) => {
          return of(ModuleActions.loadEmployeesFailure({error: err}))
        })
      )
    )
  ));

  updateEmployee$ = createEffect(() => this.actions$.pipe(
    ofType(ModuleActions.updateEmployee),
    switchMap((action) => this.userService.update(action.employee)
      .pipe(
        map((employee: any) => {
          this.moduleStoreService.selectEmployees().pipe(take(1)).subscribe((employees) => {
            const index = employees.findIndex((emp) => emp._id === employee._id)
            employees[index] = employee
          })
          return ModuleActions.updateEmployeeSuccess({employee: employee})
        }),
        catchError((err) => {
          return of(ModuleActions.updateEmployeeFailure({error: err}))
        })
      )
    )
  ));

  addEmployee$ = createEffect(() => this.actions$.pipe(
    ofType(ModuleActions.addEmployee),
    switchMap((action) => this.userService.register(action.employee)
      .pipe(
        map((data: any) => {
          this.moduleStoreService.selectEmployees().pipe(take(1)).subscribe((employees) => {
            employees.push(data.user)
          })
          return ModuleActions.addEmployeeSuccess({employee: data.user})
        }),
        catchError((err) => {
          return of(ModuleActions.addEmployeeFailure({error: err}))
        })
      )
    )
  ));

  loadPays$ = createEffect(() => this.actions$.pipe(
    ofType(ModuleActions.loadPays),
    switchMap(() => this.paysService.getPays()
      .pipe(
        map((pays: any) => {
          return ModuleActions.loadPaysSuccess({pays: pays})
        }),
        catchError((err) => {
          return of(ModuleActions.loadPaysFailure({error: err}))
        })
      )
    )
  ));

  addPays$ = createEffect(() => this.actions$.pipe(
    ofType(ModuleActions.addPays),
    switchMap((action) => this.paysService.postPays(action.pays)
      .pipe(
        map((data: any) => {
          this.moduleStoreService.selectPays().pipe(take(1)).subscribe((payss) => {
            payss.push(data.pays)
          })
          return ModuleActions.addPaysSuccess({pays: data.pays})
        }),
        catchError((err) => {
          return of(ModuleActions.addPaysFailure({error: err}))
        })
      )
    )
  ));

  updatePays$ = createEffect(() => this.actions$.pipe(
    ofType(ModuleActions.updatePays),
    switchMap((action) => this.paysService.putPays(action.pays)
      .pipe(
        map((pays: any) => {
          this.moduleStoreService.selectPays().pipe(take(1)).subscribe((payss) => {
            const index = payss.findIndex((pay) => pay._id === pays._id)
            payss[index] = pays
          })
          return ModuleActions.updatePaysSuccess({pays: pays})
        }),
        catchError((err) => {
          return of(ModuleActions.updatePaysFailure({error: err}))
        })
      )
    )
  ));

}
