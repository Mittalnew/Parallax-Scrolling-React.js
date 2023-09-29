import { Parallax } from 'react-parallax';
import Satellite from '../img/satellite.jpeg'

const ImageTwo = () => (
    <Parallax className='image' bgImage={Satellite} strength={200}>
        <div className='content'>
            <span className="img-txt">a trip to Space</span>
        </div>   
     </Parallax>
);

export default ImageTwo