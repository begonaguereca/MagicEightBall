import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/magic',
      success: (data) => {
        this.setState({
          items: data
        })
        console.log('here', this.state.items);
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    return (
    <div>
      <div className="container-fluid">

        <div className="row">
          <div className="col-sm-12">
            <h1 className="text-center">Latino Magic 8 Ball</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <h3 className="text-center phone">Text: (415) 936-8541 </h3>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <div className="magicBall">
              <img src="https://burner.bonanza.com/background_masks/85546118.png?composite=true&transparent=true" alt="Magic 8 ball"/>
            </div>
          </div>
        </div>

      </div>
    </div>
  )}
}

ReactDOM.render(<App />, document.getElementById('app'));
