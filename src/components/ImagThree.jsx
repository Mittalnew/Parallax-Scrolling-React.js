import { Parallax } from 'react-parallax';
import spaceStation from '../img/spaceStation.jpeg'

const ImageThree = () => (
    <Parallax className='image' bgImage={spaceStation} strength={200}>
        <div className='content'>
            <span className="img-txt">a trip to Space</span>
        </div>   
     </Parallax>
);

export default ImageThree