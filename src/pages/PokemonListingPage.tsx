import * as React from "react";
import PokemonListing from "../components/PokemonListing/PokemonListing";
import Typography from '@material-ui/core/Typography';

const PokemonListingPage = (data: any) => {
    let results = [];
    if(data.pokemons) {
        results = data.pokemons.map((p: any) => <PokemonListing id={p.id} dex={p.dex} name={p.name} types={p.types}/>)
      }
    return (
        <div>
            <Typography variant="headline" component="h2">Search Results</Typography>
            { results }
        </div>
    )
}

export default PokemonListingPage