// import {ClasseState} from "./datas/class/store/class-store.reducer";
// import {DatasState, PlanningsState} from "@mp/fe/ui";
// import {TeacherState} from "./datas/teacher/store/teacher-store.reducer";
// import {ModuleState} from "./datas/courses/store/module-store.reducer";

import {ModuleState} from "./core/store/module-store.reducer";

export interface AppState {
  // classe: ClasseState;
  // datas: DatasState;
  // professeur: TeacherState;
  matiere: ModuleState;
  // planning: PlanningsState;
}
