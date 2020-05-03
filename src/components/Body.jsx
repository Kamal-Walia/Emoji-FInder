import React from "react";
import "../assets/css/body.css";
//import emoji from '../emojiList.js';
import "whatwg-fetch";
import CopyToClipboard from "./CopyToClipboard";

class Body extends React.Component {
  constructor() {
    super();
    this.state = { emoji: [] };
    // this.fetchdata = this.fetchdata.bind(this);
  }
  componentDidMount() {
    this.fetchdata().then(data => {
      this.setState({
        emoji: data
      });
    });
  }
  fetchdata = () => {
    return fetch(
      "https://jsonblob.com/2d232f92-8d1d-11ea-91b5-6bdf926537a2"
    ).then(function(response) {
      return response.json().then(res => res);
    });
  }

  getFilteredEmojiList = () => {
    return this.state.emoji.filter(
      emo =>
        emo.keywords.includes(this.props.emoji) ||
        emo.title.includes(this.props.emoji)
    );
  }

  render() {
    const emojiList = this.getFilteredEmojiList();
    return (
      <div className="body">
        <ol>
          {emojiList.length > 0 ? (
            emojiList.map(emo => (
              <CopyToClipboard key={emo.title}>{({ copy }) => (<button onClick={() => copy(emo.symbol)}>
                <li> <p>
                  {emo.symbol} {emo.title}
                  </p>
                </li>
              </button>  )}
              </CopyToClipboard> 
            ))
          ) : (
            <li>No Emoji</li>
          )}
        </ol>
      </div>
    );
  }
}
export default Body;
