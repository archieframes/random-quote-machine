import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import quotes from './quotes.js';

class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            index: undefined,
            quote: "",
            author: ""
        }
        this.newQuote = this.newQuote.bind(this);
    }

    newQuote() {

        let getIndex = () => Math.floor(Math.random() * quotes.length);

        let i = getIndex();

        while (i === this.state.index) {
            i = getIndex();
        }
        
        this.setState({
            index: i,
            quote: quotes[i].quote,
            author: quotes[i].author
        });
    }

    componentDidMount() {
        this.newQuote();
    }
    
    render() {
        return (
            <div id="quote-box" class="container justify-content-center position-absolute top-50 start-50 translate-middle">
                <i class="fa fa-quote-left text-secondary"></i>
                <p id="text" class="text-center px-3 mb-0">{this.state.quote}</p>
                <i class="fa fa-quote-right text-secondary float-end"></i>
                <br></br>
                <p id="author" class="text-center">- {this.state.author}</p>
                <div class="row justify-content-between">
                    <div class="col text-center">
                        <button type="button" id="new-quote" class="btn btn-primary" onClick={this.newQuote}>New Quote</button>
                    </div>
                    <div class="col text-center">
                        <a id="tweet-quote" class="fab fa-twitter-square" href="https://twitter.com/intent/tweet" target="_blank"></a>
                    </div>    
                </div>    
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));