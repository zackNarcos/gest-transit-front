import {Pays} from "./pays";

export interface User{
  id?:number
  email:string
  roles?:string[]
  password:string
  pays: Pays
  paysId?: number
  nom:string
  prenom:string
  adresse: string
  ville: string
  telephone: string
  description: string
  salaire: number
  isLocked?: boolean
  createdAt?: Date
  updatedAt?: Date
}
