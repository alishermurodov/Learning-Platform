import { EmblaCarousel } from '@/shared/ui/emblaCarousel'
import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import '@/shared/ui/emblaCarousel/embla.css'
import './home.css'
import Image from 'next/image'
import { ButtonBr } from '@/shared/ui/button'
import { RatingComponent } from '@/shared/ui/ratingStar'

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

const Tabs = [
  { id: 1, title: "All Recommendation" },
  { id: 2, title: "Adobe Illustrator" },
  { id: 3, title: "Adobe Photoshop" },
  { id: 4, title: "UI Design" },
  { id: 5, title: "Web Programming" },
  { id: 6, title: "Mobile Programming" },
  { id: 7, title: "Backend Development" },
  { id: 8, title: "Vue JS" },
]

const Home = () => {

  const OPTIONS: EmblaOptionsType = {}

  return (
    <div className='home-content'>
      <div className="home-carousel">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
      <div className="home-tabs">
        {Tabs && Tabs.map(tab => (
          <ButtonBr className='home-tab-button'>
            {tab.title}
          </ButtonBr>
        ))}
      </div>
      <RatingComponent/>
    </div>
  )
}

export default Home