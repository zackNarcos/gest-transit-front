import {Destinations} from "./destinations";
import {Colis} from "./colis";

export interface Pays{
  id?: number
  nom: string
  colis?: Colis[]
  destinations?: Destinations[]
}
