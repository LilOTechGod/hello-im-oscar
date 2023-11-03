import { Parallax } from 'react-parallax';
import image from '../assets/2097649.jpg'

const ImageOne = () => (
    <Parallax className='imgOne' bgImage={image} bgImageAlt="the cat" strength={200}>
    </Parallax>
);

export default ImageOne