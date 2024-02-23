import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ModuleStoreService} from "./module-store.service";
import {ModuleActions, ModuleStoreActionsTypes} from "./module-store.actions";
import {catchError, map, of, switchMap} from "rxjs";
import {take} from "rxjs/operators";
import {UserService} from "../services/user.service";
import {PaysService} from "../services/pays.service";
import {ColisService} from "../services/colis.service";
import {DestinationsService} from "../services/destinations.service";
import {Params} from "../../shared/models/params";
import {Colis} from "../../shared/models/colis";
// import {MatiereService} from "@mp/fe/ui";

@Injectable()
export class ModuleStoreEffects {

  constructor(
    private actions$: Actions,
    private moduleStoreService: ModuleStoreService,
    private userService: UserService,
    private paysService: PaysService,
    private destinationService: DestinationsService,
    private coliService: ColisService,
  ) {
  }

  loadEmployees$ = createEffect(() => this.actions$.pipe(
    ofType(ModuleActions.loadEmployees),
    switchMap(() => this.userService.getUsers()
      .pipe(
        map((employees: any) => {
          const employeesWithPays = this.moduleStoreService.selectPays().pipe(
            take(1),
            map(pays => {
              employees.forEach(emp => {
                const pay = pays.find(p => p.id === emp.paysId)
                emp.pays = pay
              })

              return employees
            })
          )
          employeesWithPays.subscribe({
            next: (value) => {
              return ModuleActions.loadEmployeesSuccess({employees: value})
            }
          })
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
            const index = employees.findIndex((emp) => emp.id === employee.id)
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
            const index = payss.findIndex((pay) => pay.id === pays.id)
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

  $loadDestinations = createEffect(() => this.actions$.pipe(
    ofType(ModuleActions.loadDestinations),
    switchMap(() => this.destinationService.getDestinations()
      .pipe(
        map((destinations: any) => {
          const destWithPays = this.moduleStoreService.selectPays().pipe(
            take(1),
            map(pays => {
              destinations.forEach(dest => {
                const pay = pays.find(p => p.id === dest.paysId)
                dest.pays = pay
              })

              return destinations
            })
          )
          destWithPays.subscribe({
            next: (value) => {
              return ModuleActions.loadDestinationsSuccess({destinations: value})
            }
          })
          return ModuleActions.loadDestinationsSuccess({destinations: destinations})
        }),
        catchError((err) => {
          return of(ModuleActions.loadDestinationsFailure({error: err}))
        })
      )
    )
  ));

  $addDestination = createEffect(() => this.actions$.pipe(
    ofType(ModuleActions.addDestination),
    switchMap((action) => this.destinationService.postDestination(action.destination)
      .pipe(
        map((data: any) => {
          this.moduleStoreService.selectDestinations().pipe(take(1)).subscribe((destinations) => {
            destinations.push(data.destination)
          })
          return ModuleActions.addDestinationSuccess({destination: data.destination})
        }),
        catchError((err) => {
          return of(ModuleActions.addDestinationFailure({error: err}))
        })
      )
    )
  ));

  $updateDestination = createEffect(() => this.actions$.pipe(
    ofType(ModuleActions.updateDestination),
    switchMap((action) => this.destinationService.putDestination(action.destination)
      .pipe(
        map((destination: any) => {
          this.moduleStoreService.selectDestinations().pipe(take(1)).subscribe((destinations) => {
            const index = destinations.findIndex((dest) => dest.id === destination.id)
            destinations[index] = destination
          })
          return ModuleActions.updateDestinationSuccess({destination: destination})
        }),
        catchError((err) => {
          return of(ModuleActions.updateDestinationFailure({error: err}))
        })
      )
    )
  ));

  $loadAllColis = createEffect(() => this.actions$.pipe(
    ofType(ModuleActions.loadAllColis),
    switchMap((action) => this.coliService.getColis(action.param)
      .pipe(
        map((colis: Colis[]) => {
          const colisWithDest = this.moduleStoreService.selectDestinations().pipe(
            take(1),
            map(dests => {
              colis.forEach(coli => {
                const dest = dests.find(d => d.id === coli.destinationId)
                coli.destination = dest
              })

              return colis
            })
          )
          colisWithDest.subscribe({
            next: (value) => {
              return ModuleActions.loadAllColisSuccess({allColis: value})
            }
          })
          return ModuleActions.loadAllColisSuccess({allColis: colis})
        }),
        catchError((err) => {
          return of(ModuleActions.loadAllColisFailure({error: err}))
        })
      )
    )
  ));

  $loadInColis = createEffect(() => this.actions$.pipe(
    ofType(ModuleActions.loadInColis),
    switchMap((action) => this.coliService.getColisIn(action.param)
      .pipe(
        map((colis: Colis[]) => {
          const colisWithDest = this.moduleStoreService.selectDestinations().pipe(
            take(1),
            map(dests => {
              colis.forEach(coli => {
                const dest = dests.find(d => d.id === coli.destinationId)
                coli.destination = dest
              })

              return colis
            })
          )
          colisWithDest.subscribe({
            next: (value) => {
              return ModuleActions.loadInColisSuccess({inColis: value})
            }
          })
          return ModuleActions.loadInColisSuccess({inColis: colis})
        }),
        catchError((err) => {
          return of(ModuleActions.loadInColisFailure({error: err}))
        })
      )
    )
  ));

  $loadOutColis = createEffect(() => this.actions$.pipe(
    ofType(ModuleActions.loadOutColis),
    switchMap((action) => this.coliService.getColisOut(action.param)
      .pipe(
        map((colis: Colis[]) => {
          const colisWithDest = this.moduleStoreService.selectDestinations().pipe(
            take(1),
            map(dests => {
              colis.forEach(coli => {
                const dest = dests.find(d => d.id === coli.destinationId)
                coli.destination = dest
              })

              return colis
            })
          )
          colisWithDest.subscribe({
            next: (value) => {
              return ModuleActions.loadOutColisSuccess({outColis: value})
            }
          })
          return ModuleActions.loadOutColisSuccess({outColis: colis})
        }),
        catchError((err) => {
          return of(ModuleActions.loadOutColisFailure({error: err}))
        })
      )
    )
  ));

  $updateColis = createEffect(() => this.actions$.pipe(
    ofType(ModuleActions.updateColis),
    switchMap((action) => this.coliService.putColis(action.colis)
      .pipe(
        map((colis: any) => {
          this.moduleStoreService.selectAllColis().pipe(take(1)).subscribe((coliss) => {
            const index = coliss.findIndex((coli) => coli.id === colis.id)
            coliss[index] = colis
          })
          return ModuleActions.updateColisSuccess({colis: colis})
        }),
        catchError((err) => {
          return of(ModuleActions.updateColisFailure({error: err}))
        })
      )
    )
  ));

  $addColis = createEffect(() => this.actions$.pipe(
    ofType(ModuleActions.addColis),
    switchMap((action) => this.coliService.postColi(action.colis)
      .pipe(
        map((data: any) => {
          this.moduleStoreService.selectAllColis().pipe(take(1)).subscribe((coliss) => {
            coliss.push(data.colis)
          })
          return ModuleActions.addColisSuccess({colis: data.colis})
        }),
        catchError((err) => {
          return of(ModuleActions.addColisFailure({error: err}))
        })
      )
    )
  ));

  $deleteColis = createEffect(() => this.actions$.pipe(
    ofType(ModuleActions.deleteColis),
    switchMap((action) => this.coliService.deleteColis(action.colis)
      .pipe(
        map((colis: any) => {
          this.moduleStoreService.selectAllColis().pipe(take(1)).subscribe((coliss) => {
            const index = coliss.findIndex((coli) => coli.id === colis.id)
            coliss.splice(index, 1)
          })
          return ModuleActions.deleteColisSuccess({colis: colis})
        }),
        catchError((err) => {
          return of(ModuleActions.deleteColisFailure({error: err}))
        })
      )
    )
  ));

  $getUser = createEffect(() => this.actions$.pipe(
    ofType(ModuleActions.getUser),
    switchMap((action) => this.userService.getMe()
      .pipe(
        map((user: any) => {
          const userWithPays = this.moduleStoreService.selectPays().pipe(
            // take(1),
            map(pays => {
              console.log("pays", pays)
              const pay = pays.find(p => p.id === user.paysId)
              console.log("pay", pay)
              user.pays = pay
              console.log("user", user)

              return user
            })
          )
          userWithPays.subscribe({
            next: (value) => {
              return ModuleActions.getUserSuccess({user: value})
            }
          })
          return ModuleActions.getUserSuccess({user: user})
        }),
        catchError((err) => {
          return of(ModuleActions.getUserFailure({error: err}))
        })
      )
    )
  ));

  $loadColisStat = createEffect(() => this.actions$.pipe(
    ofType(ModuleActions.loadColisStat),
    switchMap((action) => this.coliService.getColisStat(action.param)
      .pipe(
        map((colisStat: any) => {
          return ModuleActions.loadColisStatSuccess({colisStat: colisStat})
        }),
        catchError((err) => {
          return of(ModuleActions.loadColisStatFailure({error: err}))
        })
      )
    )
  ));
}
