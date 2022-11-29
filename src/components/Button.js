import * as React from 'react';

export default function Button() {

  const clickHandler = (event) => {
    event.preventDefault();
    console.log('clicked');
  }

  return (
    <button className="button" type="submit" onClick={clickHandler}>
      This submit button does nothing
    </button>
  );
}

