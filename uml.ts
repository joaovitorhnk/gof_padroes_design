export class UMLClass {

    constructor(
        private nome: string,
        public sobrnome: string,
        protected idade: number
    ) {}

    public getNome(): string {
        return this.nome;
    }

    public getIdade(): number {
        return this.idade;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public setIdade(idade: number): void {
        this.idade = idade;
    }

}

export class Shape {}

export class Circle extends Shape {}


export class Carro {
    private motor: Motor

    constructor(motor: Motor) {
        this.motor = motor;
    }
    
}

export class Motor {}

const motor = new Motor();
const carro = new Carro(motor);

console.log(carro);


export class Printer {
    print(document: Document): void {
        console.log(document)
    }
}

export class Document {}


export interface ControleRemoto {
    paly(): void;
    pause(): void;
}

export interface ControleSom extends ControleRemoto {
    mudarRadio(): void
}

export class Bluray implements ControleRemoto {
    pause(): void {
        console.log("Pause");
    }

    paly(): void {
        console.log("Play")
    }
}

export  class Som implements ControleSom {
    paly(): void {
        console.log("pal")
    }

    pause(): void {
        console.log("pau")
    }

    mudarRadio(): void {
        console.log("ola")
    }
}


export abstract class Animal {
    protected abstract makeNoise(): string;

    makeSound(): void {
        console.log(this.makeNoise)
    }
}

export class Dog extends Animal {
    protected makeNoise(): string {
        return "au"
    }
}

const dog = new Dog();
console.log(dog)