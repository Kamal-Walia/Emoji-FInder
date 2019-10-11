import React from 'react';
import Header from './Header.jsx';
import Body from './Body.jsx';
import '../assets/css/app.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        // this.handleChange = this.handleChange.bind(this);
        this.state = { search: "" };
    }
    handleChange = (e) => {
        this.setState({ search: e.target.value })
    }
    render() {
        return (
            <div className="app">
                <Header handleChange={this.handleChange} search={this.state.search} />
                <Body emoji={this.state.search} />
            </div>
        );
    }
}
export default App;