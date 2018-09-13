import * as React from 'react'

interface IHeaderProps {
  search(searchTerm: string): Promise<void>
}

interface IHeaderState {
  searchTerm: string
}

class Header extends React.Component<IHeaderProps, IHeaderState> {

  constructor(props: any) {
    super(props);
    this.state = {
      searchTerm: ""
    }
    this.updateSearchTerm = this.updateSearchTerm.bind(this);
  }

  public updateSearchTerm(searchTerm: string): void {
    this.setState({
      searchTerm
    })
  }

  public log() {
    console.log("hi")
  }

  public render() {
      return (
        <input type="text"
          onChange={this.log}
          // onChange={({currentTarget}) => this.updateSearchTerm(currentTarget.value)}
          // onSubmit={() => this.props.search(this.state.searchTerm)}
        />
      );
    }
}

export default Header