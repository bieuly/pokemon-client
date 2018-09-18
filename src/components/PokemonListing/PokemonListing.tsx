import * as React from 'react';
import './PokemonListing.css';
import { Link } from 'react-router-dom';

interface IPokemonListingProps {
    id: string,
    dex: string,
    name: string,
    types: Array<{id: string, name: string}>
}

class PokemonListing extends React.Component<IPokemonListingProps> {

    constructor(props: IPokemonListingProps) {
        super(props)
    }

    private renderTypes(types: Array<{id: string, name: string}>): any {
        return types.map(type => <div key={type.id}><span>{type.name}</span></div>)
    }

    public render() {
        return (
            <Link to={`/details/${this.props.id}`} style={{textDecoration: 'none'}}>
                <div className="pokemon_listing" id={this.props.id}>
                    <div><span>{this.props.dex}</span></div>
                    <div><span>{this.props.name}</span></div>
                    {this.renderTypes(this.props.types)}
                </div>
            </Link>
        );
        
    }

}

export default PokemonListing