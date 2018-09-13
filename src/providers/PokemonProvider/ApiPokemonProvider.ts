import { IPokemonProvider } from './index'

export default class ApiPokemonProvider implements IPokemonProvider {
    
    private url = "http://localhost:9000";

    public async getAll(): Promise<any[]> {
        const response = await fetch(this.url);
        if(!response.ok) {
            throw Error(response.statusText);
        }
        return await response.json();
    }

    public async search(searchTerm: string): Promise<any[]> {
        const response = await fetch(`${this.url}/search/${searchTerm}`);
        if(!response.ok) {
            throw Error(response.statusText);
        }
        return await response.json();
    }

}