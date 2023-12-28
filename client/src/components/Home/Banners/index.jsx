import { useRef, memo } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'

import { Slide } from 'components'

import slider1 from 'assets/slider1.png'
import slider2 from 'assets/slider2.jpg'
import slider3 from 'assets/slider3.png'
import slider4 from 'assets/slider4.png'
import slider5 from 'assets/slider5.png'

const bannerArr = [slider1, slider2, slider3, slider4, slider5]

const Banners = memo(() => {
  const swiperRef = useRef(null)
  const prev = () => swiperRef.current.swiper.slidePrev()
  const next = () => swiperRef.current.swiper.slideNext()

  return (
    <Swiper
      ref={swiperRef}
      pagination={{
        type: 'fraction',
        el: '.swiper-pagination',
      }}
      modules={[Pagination]}
    >
      {bannerArr.map(banner => (
        <SwiperSlide style={{ backgroundImage: `linear-gradient(to right, rgba(10, 10, 10, 0.6), rgba(10, 10, 10, 0.1)), url(${banner})` }} key={banner}>
          <Slide next={next} prev={prev} img={slider1} text='Slider 1' />
        </SwiperSlide>
      ))}
    </Swiper>
  )
})

export default Banners
