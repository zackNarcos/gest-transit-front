export class Destinations{
  _id?: number
  libelle: string
  pays: string
  jourDeDepart: string
  prixKilos: number
  prixDouane: number
  isArchivate: boolean
  colis: [
    string
  ]
}
