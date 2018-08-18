import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateScannedStatus, updateScannedResults } from '../../actions/addItemActions';
import Quagga from 'quagga';

export class Scanner extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (navigator.mediaDevices && typeof navigator.mediaDevices.getUserMedia === 'function') {
      Quagga.init({
        inputStream: {
          type: 'LiveStream',
          constraints: {
            width: 320,
            height: 240,
            facingMode: "environment"
          }
        },
        locator: {
          patchSize: 'medium',
          halfSample: true
        },
        decoder: {
          readers: ['code_128_reader']
        }
      }, function(err) {
        if (err) {
          console.log('ERR', err)
          return;
        }
        Quagga.start();
      })
    }
  }

  render() {
    return (
      <div id="interactive" className="viewport"/>
    )
  }
}

const mapStateToProps = state => ({
  status: state.addItem.status,
  results: state.addItem.results
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ updateScannedStatus, updateScannedResults }, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Scanner));