import React from 'react';
import PropTypes from 'prop-types';

class TestButton extends React.Component {
  render() {
    return (
      <button type="submit" className="btn" style={{backgroundColor: 'blue' }}>
        {this.props.title}
      </button>
    );
  }
}

TestButton.propTypes = {
  title: PropTypes.string
};

TestButton.defaultProps = {
  title: 'Submit'
};

export default TestButton;
