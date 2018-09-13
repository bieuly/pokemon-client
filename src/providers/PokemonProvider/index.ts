export interface IPokemonProvider {
    getAll(): Promise<any[]>;
    search(searchTerm: string): Promise<any[]>;
}