import React from 'react';
import '../assets/css/header.css';
const Heading = () => {
    return <div><h2>The Emoji Finder App</h2><br/><h3>Click To Copy The Emoji</h3></div>
}
class Search extends React.Component {
    render() {
        return (
            <div className="header">
                <Heading />
                <div className="search">
                    <form>
                        <input type="text" value={this.props.search} id="searchbar" onChange={this.props.handleChange} autoComplete="off" />
                    </form>
                </div>
            </div>
        );
    }
}
export default Search;