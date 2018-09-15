import * as React from 'react'

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
        <form onSubmit={this.handleSubmit}>
          <input type="text" id="searchTerm"
            onChange={this.handleOnChange}
          />
        </form>
      );
    }
}

export default Header