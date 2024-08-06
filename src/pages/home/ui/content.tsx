import { EmblaCarousel } from '@/shared/ui/emblaCarousel'
import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import '@/shared/ui/emblaCarousel/embla.css'
import './home.css'
import Image from 'next/image'

const SLIDES = [
  {
    id: 1,
    swBgImage: 'https://postimage.me/images/2024/08/06/swipeImg1.png',
    swUsericon: 'https://postimage.me/images/2024/08/06/sw1UserIcon.png',
    userName: 'Jessica Wong',
    position: 'Photographer',
    winDate: 'Winner Photo 2017 Awwards',
    since: 'Joined Klevr since 2006',
    background: "#3dcbb1",
    beltDiv: '#c5322a'
  },
  {
    id: 2,
    swBgImage: 'https://postimage.me/images/2024/08/06/swipeImg2.png',
    swUsericon: 'https://postimage.me/images/2024/08/06/sw2UserIcon.png',
    userName: 'Jane Kitani',
    position: 'Toys Photographer',
    winDate: 'Winner Photo 2018 Awwards',
    since: 'Joined Klevr since 2006',
    background: "#ffd130",
    beltDiv: '',
  },
]

const Home = () => {

  const OPTIONS: EmblaOptionsType = {}

  return (
    <div className='home-content'>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  )
}

export default Home