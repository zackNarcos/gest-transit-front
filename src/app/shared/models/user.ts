export interface User{
  _id?:number
  email:string
  roles:[string]
  password:string
  pays: Object
  nom:string
  prenom:string
  adresse: string
  ville: string
  telephone: string
  description: string
  salaire: number
  isLocked: boolean
  createdAt?: Date
  updatedAt?: Date
}
