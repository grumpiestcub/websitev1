import '../css/App.css';
import { useSpring, animated } from 'react-spring';
import { useDrag } from '@use-gesture/react';
//want to make something with animated ascii here for music page with links to bandcamp, soundcloud, spotify, etc

function BandcampInfo() {
    const musicPos = useSpring({x:0,y:0})
    const bindMusicPos = useDrag((params) => {
        musicPos.x.set(params.offset[0]);
        musicPos.y.set(params.offset[1])
    });
    return (
        <>
        <animated.div {...bindMusicPos()} className='musicContainer' style={{
            y: musicPos.y,
            x: musicPos.x,
        }}>
            <a href="https://grumpiestcub.bandcamp.com/">bandcamp</a>
        </animated.div>
        </>
    )
}



export default BandcampInfo