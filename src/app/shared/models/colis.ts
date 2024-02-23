import {User} from "./user";
import {Pays} from "./pays";
import {Destinations} from "./destinations";

export class Colis{
  id?: number
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
  destinationId: number
  paysDestination: Pays
  paysDestinationId: number
  status: string
  numero: string
  dateDepot: Date
  employe: User
  employeId: number
  isSolde: boolean
}
