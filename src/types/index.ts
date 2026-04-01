export interface CityInfo{
    name: string;
    country: string;
    population: number;
    description: string;
    foundationYear: number;
}

export interface Place{
    id: number;
    name: string;
    description: string;
    address: string;
    pictureName?: string;
}

export interface Monument{
    id: number;
    name: string;
    description: string;
    year: number;
    pictureName?: string;
}

export interface Fact{
    id: number;
    name: string;
    description: string;
    year: number;
}
