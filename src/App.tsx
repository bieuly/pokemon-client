import * as React from 'react';
import './App.css';
import Header from './components/Header';
import ApiPokemonProvider from './providers/PokemonProvider/ApiPokemonProvider';
import { Route, Switch, withRouter } from "react-router-dom";
import HomePage from './pages/HomePage';
import PokemonListingPage from './pages/PokemonListingPage';
import PokemonDetailsPage from './pages/PokemonDetailsPage';

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

  public async search(searchTerm: string): Promise<any> {
     const searchResult = await this.apiPokemonProvider.search(searchTerm);
     this.setState({
       searchResult
     })
     this.props.history.push("/search")
  }

  public render() {
    return (
      <div className="App">
      <Header search={this.search}/>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/search" render={(props: any)=><PokemonListingPage {...props} pokemons={this.state.searchResult}/>} />
            <Route path="/details/:id" render={(props: any)=><PokemonDetailsPage {...props} details={this.state.searchResult.find((p:any)=>p.id==props.match.params.id)} />}/>
          </Switch>
      </div>
    );
  }
}

export default withRouter(App);
