import * as React from 'react';
import './App.css';
import Header from './components/Header';
import ApiPokemonProvider from './providers/PokemonProvider/ApiPokemonProvider';
import PokemonListing from './components/PokemonListing/PokemonListing';

class App extends React.Component<any, any> {
  
  public apiPokemonProvider: ApiPokemonProvider;

  constructor(props: any) {
    super(props);
    this.state = {
      data: [],
      error: "",
      searchResult: []
    };

    this.apiPokemonProvider = new ApiPokemonProvider();
    this.search = this.search.bind(this)
  }

  public async componentDidMount() {
    const pokemon = await this.apiPokemonProvider.getAll();
    this.setState({
      data: pokemon
    });     
  }

  public async search(searchTerm: string): Promise<void> {
     const searchResult = await this.apiPokemonProvider.search(searchTerm);
     this.setState({
       searchResult
     })
  }

  public render() {

    let pokemon = []
    if(this.state.searchResult) {
      pokemon = this.state.searchResult.map((p: any) => <PokemonListing id={p.id} dex={p.dex} name={p.name} types={p.types}/>)
    }

    return (
      <div className="App">
        <Header search={this.search}/>
        { pokemon }
      </div>
    );
  }
}

export default App;
