export class Libro {
    constructor(
        public titulo: string,
        private autor: string,
        private sinopsis?: string
    ){}
    toString():string{
        return "Libro: \n\tTitulo: " + this.titulo + "\n\tAutor:" + this.autor + "\n\tSinopsis:\n" + this.sinopsis;
    }
}
