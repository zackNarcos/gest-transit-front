import {Pays} from "./pays";

export class Destinations{
  id?: number
  libelle: string
  pays: Pays
  paysId: number
  jourDeDepart: string
  prixKilos: number
  prixDouane: number
  isArchivate: boolean
  colis?: string[]
}
