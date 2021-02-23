/*export class Candidat {
    private nom: string;
    private age: number;
    private email: string;

    public constructor(nom: string, age: number, email: string) {
        this.nom = nom;
        this.age = age;
        this.email = email;
    }
}*/


export interface Candidat {
    nom: string;
    age: number;
    email: string;
}

export interface Joueur {
    numero: number;
    nom: string;
    equipe: string;
    photo: string;
}

export interface Album {
    userId: number;
    id: number;
    title: string;
}

export interface User {
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

export interface Address {
    street: string;
    suite: string;
    city : string;
    zipcode: string;
    geo: Geo;
}

export interface Geo {
    lat: string;
    lng: string;
}

export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;

}