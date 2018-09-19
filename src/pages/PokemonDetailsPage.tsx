import * as React from "react";
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const PokemonDetailsPage = (props: any) => {
    if(props.details) {
        return (
            <div>
                <Typography variant="headline" component="h2">Details</Typography>
                    <Card id={props.details.id}>
                    <div style={{margin: "40px"}}>
                        <CardContent>
                            <Typography color="textSecondary">Dex: {props.details.dex}</Typography>
                            <Typography variant="headline" component="h2">{props.details.name}</Typography>
                        </CardContent>
                    </div>
                </Card>
            </div>
        )
    } else {
        return <div></div>
    }
}

export default PokemonDetailsPage