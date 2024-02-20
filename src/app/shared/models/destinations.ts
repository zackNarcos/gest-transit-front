import {Pays} from "./pays";

export class Destinations{
  _id?: number
  libelle: string
  pays: Pays
  jourDeDepart: string
  prixKilos: number
  prixDouane: number
  isArchivate: boolean
  colis?: string[]
}
