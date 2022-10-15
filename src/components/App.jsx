import React from 'react';
import Header from './Header.jsx';
import Body from './Body.jsx';
import '../assets/css/app.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        // this.handleChange = this.handleChange.bind(this);
        this.state = { search: "", gifs:[] };
    }
    handleChange = async (e) => {
        this.setState({ search: e.target.value })
        if(e.target.value && e.target.value.length > 3){
            const response = await fetch(
                `https://g.tenor.com/v1/search?q=${e.target.value}&key=LIVDSRZULELA&limit=8`
            ).then(function (response) {
                return response.json().then(res => res);
            }).catch(err => {
                console.log(err);
            });
            this.setState({ gifs: response.results })
        }
    }
    render() {
        return (
            <div className="app">
                <Header handleChange={this.handleChange} search={this.state.search} />
                <Body emoji={this.state.search} gifs={this.state.gifs}/>
            </div>
        );
    }
}
export default App;