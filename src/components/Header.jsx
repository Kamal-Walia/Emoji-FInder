import React from 'react';
import '../assets/css/header.css';
const Heading = () => {
    return <h2>The Emoji Finder App</h2>
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