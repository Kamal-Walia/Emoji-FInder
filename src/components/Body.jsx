import React from "react";
import "../assets/css/body.css";
import emoji from '../emojiList.js';
import "whatwg-fetch";
import CopyToClipboard from "./CopyToClipboard";
import debounce from 'lodash.debounce';

class Body extends React.Component {
  constructor() {
    super();
    this.state = { emojis: [] };
  }

  componentDidMount() {
    // this.fetchdata().then(data => {
    //   this.setState({
    //     emoji: data
    //   });
    // })
    this.getFilteredEmojiList()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.emoji !== this.props.emoji) {
      this.getFilteredEmojiList()
    }
  }

  fetchdata = () => {
    return emoji
    // return fetch(
    //   "https://jsonblob.com/api/7d39dd87-1167-11eb-b9b6-73f7ced8054d"
    // ).then(function (response) {
    //   return response.json().then(res => res);
    // }).catch(err => {
    //   console.log(err);
    // });
  }

  getFilteredEmojiList = () => {
    if (this.props.emoji.length === 0) {
      this.setState({ emojis: emoji })
    } else {
      const debounced = debounce(() => {
        const emojis = emoji.filter(
          emo =>
            emo.keywords.includes(this.props.emoji) ||
            emo.title.includes(this.props.emoji)
        )
        this.setState({ emojis })
      }

        , 300);
      debounced()
    }
  }

  render() {
    const emojis = this.state.emojis;
    return (
      <div className="body">
        <ol>
          {emojis?.length > 0 ? (
            emojis.map(emo => (
              <CopyToClipboard key={emo.title}>{({ copy }) => (<button onClick={() => copy(emo.symbol)}>
                <li> <p>
                  {emo.symbol} {emo.title}
                </p>
                </li>
              </button>)}
              </CopyToClipboard>
            ))
          ) : (
              <li>No Emoji</li>
            )}
            {this.props.gifs.length > 0 ? (
            this.props.gifs.map(gifs => (
              <CopyToClipboard key={gifs.id}>{({ copy }) => (<button onClick={() => copy(gifs.media[0]?.gif?.url)}>
                <li> <img src={gifs.media[0]?.gif?.url} />
                </li>
              </button>)}
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
