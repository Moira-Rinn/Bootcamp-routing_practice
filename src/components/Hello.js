import React from 'react';

const Hello = (props) => {

  const { word, color, bgcolor } = props;

  if (isNaN(+word)) {
    return (
      <h1 style={{ color: color, backgroundColor: bgcolor }}>The word is: {word}!!</h1>
    )
  }
  else {
    return (
      < h1 > Your number is: {word}</ h1>
    )
  }
}

export default Hello;