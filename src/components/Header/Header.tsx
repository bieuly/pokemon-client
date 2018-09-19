import * as React from 'react';
import HomeLink from '../HomeLink/HomeLink';
import "./Header.css";
import Input from '@material-ui/core/Input';

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

  private handleOnChange = (event: any) => {
    this.setState({
      searchTerm: event.target.value
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
            <Input placeholder="Search..." type="text" id="searchTerm" autoComplete="off"
              onChange={this.handleOnChange}
            />
          </form>
        </div>
      );
    }
}

export default Header;