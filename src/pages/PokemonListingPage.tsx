import * as React from "react";
import PokemonListing from "../components/PokemonListing/PokemonListing";

const PokemonListingPage = (data: any) => {
    let results = [];
    if(data.pokemons) {
        results = data.pokemons.map((p: any) => <PokemonListing id={p.id} dex={p.dex} name={p.name} types={p.types}/>)
      }
    return (
        <div id="search-results">
            <h1>Search Results</h1>
            { results }
        </div>
    )
}

export default PokemonListingPage