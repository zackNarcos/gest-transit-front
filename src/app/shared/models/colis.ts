import {User} from "./user";

export class Colis{
  _id?: number
  nomExpediteur: string
  prenomExpediteur: string
  telephoneExpediteur: string
  npiExpediteur: string
  emailExpediteur: string
  nomBeneficiaire: string
  prenomBeneficiaire: string
  telephoneBeneficiaire: string
  poids: number
  emballage: number
  douane: number
  contenue: string
  valeur: number
  avance: number
  reste: number
  prixKilo: number
  prixTotal: number
  destination: string
  paysDestination: string
  status: string
  numero: string
  dateDepot: Date
  employe: string
  isSolde: boolean
}
