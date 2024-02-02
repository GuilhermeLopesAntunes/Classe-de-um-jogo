class hero{
    constructor(nome,idade,tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(tipo){
        if(tipo == 'mago'){
            console.log(`o ${tipo} atacou usando magia`)
        }
        else if(tipo == 'guerreiro'){
            console.log(`o ${tipo} atacou usando espada`)
        }
        if(tipo == 'monje'){
            console.log(`o ${tipo} atacou usando artes marciais`)
        }
        if(tipo == 'ninja'){
            console.log(`o ${tipo} atacou usando shuriken`)
        }
    }
} 

const hero1 = new hero('Guilherme',18,'Ninja');

hero1.atacar('guerreiro');