import * as React from 'react';
import './PokemonListing.css';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { CardContent } from '@material-ui/core';

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
        return types.map(type => <Typography color="textSecondary" key={type.id}>{type.name}</Typography>)
    }

    public render() {
        return (
            <div className="pokemon_listing">
                <Link to={`/details/${this.props.id}`} style={{textDecoration: 'none'}}>
                    <Card id={this.props.id}>
                        <CardContent>
                            <Typography color="textSecondary">{this.props.dex}</Typography>
                            <Typography variant="headline" component="h2">{this.props.name}</Typography>
                            {this.renderTypes(this.props.types)}
                        </CardContent>
                    </Card>
                </Link>
            </div>
        );
        
    }

}

export default PokemonListing