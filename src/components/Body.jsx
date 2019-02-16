import React from 'react';
import '../assets/css/body.css';
//import emoji from '../emojiList.js';
import 'whatwg-fetch';

class Body extends React.Component {
    constructor() {
        super();
        this.state = { emoji: [] };
        this.fetchdata = this.fetchdata.bind(this);
    }
    componentDidMount() {
        this.fetchdata().then((data) => {
            this.setState({
                emoji: data
            })
        });
    }
    fetchdata() {
        return fetch('https://jsonblob.com/api/9efb4334-2f65-11e9-9080-4bc71bf693d4')
            .then(function (response) {
                return response.json().then((a) => {
                    return a;
                })
            })
    }

    render() {
        console.log(this.state.emoji);
        const emojiList = this.state.emoji.filter((emo) => emo.keywords.includes(this.props.emoji) || emo.title.includes(this.props.emoji));
        return (
            <div className="body">
                <ol>
                    {emojiList.length > 0 ? emojiList.map((emo) => <li key={emo.title}>{emo.symbol} {emo.title}</li>) : <li>No Emoji</li>}
                </ol>
            </div>
        );
    }
}
export default Body;