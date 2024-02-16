import {Destinations} from "./destinations";
import {Colis} from "./colis";

export interface Pays{
  _id?: string
  nom: string
  colis?: Colis[]
  destinations?: Destinations[]
}
