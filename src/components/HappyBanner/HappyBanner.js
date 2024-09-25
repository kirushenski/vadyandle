import React from 'react';

function HappyBanner({guessesCount}) {
  return <div className="happy banner">
  <p>
    <strong>Congratulations!</strong> Got it in <strong>{guessesCount} guesses</strong>.
  </p>
</div>;
}

export default HappyBanner;
