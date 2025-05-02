import '../css/App.css';
import cmngSoon from '../assets/bw1.jpg'

function ImgContainerOne() {
    return (
        <div className='container' draggable onDrag={(event) => this.onDrag(event)}>
            move me
            <img className='boi' src={cmngSoon} alt="the man himself"/>
        </div>
    )
}

export default ImgContainerOne