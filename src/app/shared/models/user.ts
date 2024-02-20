import {Pays} from "./pays";

export interface User{
  _id?:string
  email:string
  roles?:string[]
  password:string
  pays: Pays
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
