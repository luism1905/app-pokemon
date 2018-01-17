
export class DetallePokemon {
    constructor(
        public nombre:string,
        public peso:string,
        public altura:string,
        public movimientos:string,
        public habilidades: Array<string>, 
        public especies:string
    ) { }
  }