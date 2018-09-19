import * as React from 'react';
import HomeLink from '../HomeLink/HomeLink';
import "./Header.css"

interface IHeaderProps {
  search(searchTerm: string): Promise<void>
}

interface IHeaderState {
  searchTerm: string
}

class Header extends React.Component<IHeaderProps, IHeaderState> {

  constructor(props: IHeaderProps) {
    super(props);
    this.state = {
      searchTerm: ""
    }
  }

  private handleOnChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      searchTerm: event.currentTarget.value
    })
  }

  private handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.props.search(this.state.searchTerm)
  }

  public render() {
      return (
        <div className="header">
          <HomeLink/>
          <form onSubmit={this.handleSubmit}>
            <input className="search-bar" type="text" id="searchTerm" autoComplete="off"
              onChange={this.handleOnChange}
            />
          </form>
        </div>
      );
    }
}

export default Header