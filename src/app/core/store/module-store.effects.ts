import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ModuleStoreService} from "./module-store.service";
import {ModuleActions, ModuleStoreActionsTypes} from "./module-store.actions";
import {catchError, map, of, switchMap} from "rxjs";
import {take} from "rxjs/operators";
import {MatiereService} from "@mp/fe/ui";

@Injectable()
export class ModuleStoreEffects {

  constructor(
    private actions$: Actions,
    private moduleStoreService: ModuleStoreService,
    private matiereService: MatiereService,
  ) {
  }

  loadModules$ = createEffect(() =>this.actions$.pipe(
    ofType(ModuleStoreActionsTypes.LoadModule),
    switchMap((action: any) =>{
      return this.matiereService.getMatieres(action.id)
        .pipe(
          map((modules: any) =>{
            return ModuleActions.loadModuleSuccess({modules})
          }),
          catchError((err) =>{
            return of(ModuleActions.loadModuleFailure({error: err}))
          })
        )
    })
  ));

  // loadModulesByClass$ = createEffect(() =>this.actions$.pipe(
  //   ofType(ModuleStoreActionsTypes.LoadModule),
  //   switchMap((action: any) =>{
  //     return this.matiereService.getMatieresByClasse(action.id)
  //       .pipe(
  //         map((modules: any) =>{
  //           console.log('modules', modules)
  //           return ModuleActions.loadModuleSuccess({modules})
  //         }),
  //         catchError((err) =>{
  //           return of(ModuleActions.loadModuleFailure({error: err}))
  //         })
  //       )
  //   })
  // ));

}
