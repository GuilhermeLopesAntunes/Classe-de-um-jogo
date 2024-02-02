class hero{
    constructor(nome,idade,tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(tipo){
        if(this.tipo == 'mago'){
            console.log(`o ${this.tipo} atacou usando magia`)
        }
        else if(this.tipo == 'guerreiro'){
            console.log(`o ${this.tipo} atacou usando espada`)
        }
        if(this.tipo == 'monje'){
            console.log(`o ${this.tipo} atacou usando artes marciais`)
        }
        if(this.tipo == 'Ninja'){
            console.log(`o ${this.tipo} atacou usando shuriken`)
        }
    }
} 

const hero1 = new hero('Guilherme',18,'Ninja');

hero1.atacar();