import '../css/App.css';
import { useSpring, animated } from 'react-spring';
import { useDrag } from '@use-gesture/react';

function SoundInfo() {
    const musicPos = useSpring({x:0,y:0})
    const bindMusicPos = useDrag((params) => {
        musicPos.x.set(params.offset[0]);
        musicPos.y.set(params.offset[1])
    });
    return (
        <>
        <animated.div {...bindMusicPos()} className='soundContainer' style={{
            y: musicPos.y,
            x: musicPos.x,
        }}>
            <a href="https://soundcloud.com/grumpiestcub">soundcloud</a>
        </animated.div>
        </>
    )
}



export default SoundInfo