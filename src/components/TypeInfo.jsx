import '../css/App.css';
import TypeWriter from "typewriter-effect"
import { useSpring, animated } from 'react-spring';
import { useDrag } from '@use-gesture/react';

function TypeInfo() {
  const typePosition = useSpring({x: 0, y: 0})
  const bindTypePosition = useDrag((params) => {
    typePosition.x.set(params.offset[0]);
    typePosition.y.set(params.offset[1])
  });
  return (
    <>
      <animated.div {...bindTypePosition()} className='typeContainer' style={{
        y: typePosition.y,
        x: typePosition.x,
      }}>
          <TypeWriter options={{
            strings: ['// a grumpy newsletter // vol.1 // pictures // music // art // and more //'],
            autoStart: true, loop: true,}} 
          />
      </animated.div>
    </>
  )
}


export default TypeInfo