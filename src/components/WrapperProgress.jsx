import React from 'react';
import BrailleProgressBar from './Progress';

const WrapperProgress = () => {
  return (
    <div className="" style={styles.center}>
      <BrailleProgressBar size="2rem" length={20} speed={100} stagger={50} />
    </div>
  );
};

const styles = {
  center: {
    height: '10vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', 
    paddingBottom: '33vh',
  },
};

export default WrapperProgress;