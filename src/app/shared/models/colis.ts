import {User} from "./user";
import {Pays} from "./pays";
import {Destinations} from "./destinations";

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
  destination: Destinations
  paysDestination: Pays
  status: string
  numero: string
  dateDepot: Date
  employe: User
  isSolde: boolean
}
