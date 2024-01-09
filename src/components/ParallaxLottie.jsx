import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/developerLottie.json';

const ParallaxLottie = () => {
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const handleScroll = () => {
                        if (ref.current) {
                            const scrollOffset = window.scrollY - ref.current.offsetTop;
                            if (scrollOffset >= 0) {
                                ref.current.style.transform = `translateY(${-scrollOffset * 0.3}px)`;
                            }
                        }
                    };

                    window.addEventListener('scroll', handleScroll);

                    return () => {
                        window.removeEventListener('scroll', handleScroll);
                    };
                }
            },
            {
                threshold: 0.1,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div style={{ width: '100%', height: 450, position: 'relative', overflow: 'hidden', backgroundColor: '#9F816D' }}>
            <div ref={ref} style={{ width: '100%', height: '100%', position: 'absolute' }}>
                <Lottie animationData={animationData} style={{ width: '100%', height: '600px', marginTop: '2rem' }} />
            </div>
        </div>
    );
};

export default ParallaxLottie;