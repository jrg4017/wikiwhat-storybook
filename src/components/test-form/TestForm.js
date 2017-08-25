import React from 'react';
import PropTypes from 'prop-types';

class TestForm extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <form action="">
          <input type="text" required placeholder="First Name"/>
          <input type="text" required placeholder="Last Name"/>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

TestForm.propTypes = {
  title: PropTypes.string
};

TestForm.defaultProps = {
  title: 'Default Form Name'
};

export default TestForm;
