/*import { useRef } from 'react';*/
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation, EffectFade } from 'swiper';
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import styles from '../styles/Home.modules.scss'


const Home = () => {
    return (
        <div className={styles.container}>
            <Swiper
                modules={[Navigation, EffectFade]}
                navigation
                effect={'fade'}
                speed={800}
                slidesPerView={1}
                loop
                className={styles.myswiper}>
                <SwiperSlide className={styles.swiperslide}>
                    <img src="./imgs/tamaheaderscaled.jpeg" alt='hi'></img>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperslide}>
                    <img src="./imgs/timi.png" alt='by'></img>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperslide}>
                    <img src="./imgs/HQ_TOMO.png" alt='my'></img>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}
export default Home;