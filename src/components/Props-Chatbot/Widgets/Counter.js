import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom'

const Countdown = (props) => {
	const navigate= useNavigate()
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
	setInterval(() => {
         if (seconds > 0) {
        setSeconds(seconds - 1);
      }
	else
		navigate('/lastpage')
    }, 1000);
  }, [seconds]);

  return (
    <div>
      <p>Countdown: {seconds}</p>
    </div>
  );
};

export default Countdown;
