import * as React from "react";

const PokemonDetailsPage = (props: any) => {
    if(props.details) {
        return (
            <div>
                <div>{props.match.params.id}</div>
                <div><pre>{JSON.stringify(props.details, null)}</pre></div>
            </div>
        )
    } else {
        return <div></div>
    }
}

export default PokemonDetailsPage