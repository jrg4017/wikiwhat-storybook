import React from 'react';

class TestForm extends React.Component {
  render() {
    return (
      <form action="">
        <input type="text" required placeholder="First Name"/>
        <input type="text" required placeholder="Last Name"/>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default TestForm;
