import Image from 'next/image'
import React, { useState, useCallback } from 'react'
import { ButtonBr } from '../button'

type PropType = {
  id: number;
  swBgImage: string;
  swUsericon: string;
  userName: string;
  position: string;
  winDate: string;
  since: string;
  background: string;
  beltDiv: string;
}

export const LazyLoadImage: React.FC<PropType> = (props) => {
  const {
    swBgImage,
    swUsericon,
    background,
    beltDiv,
    userName,
    position,
    winDate,
    since
  } = props
  const [hasLoaded, setHasLoaded] = useState(false)

  const handleImageLoad = useCallback(() => {
    setHasLoaded(true)
  }, [])

  return (
    <div className="embla__slide">
      <div className="embla_slide_info" style={{ background: background }}>
        <h1>Learn something new everyday.</h1>
        <p>Become professionals and ready to join the world.</p>
        <ButtonBr
          className='embla_slide_info_btn'
        >
          {'Explore Photography'}
        </ButtonBr>
      </div>
      {
        beltDiv != '' && <div className="embla_slide_empt">
          {/*  */}
        </div>
      }

      <div
      >
        {!hasLoaded && <span className="embla__lazy-load__spinner" />}

        <Image
          className="embla__slide__img"
          onLoad={handleImageLoad}
          src={swBgImage}
          alt="Your alt text"
          width={800}
          height={400}
        />
        <div className="emba_slide_user">
          <div className="emba_slide_user_icon_div">
            <Image
              onLoad={handleImageLoad}
              src={swUsericon}
              alt="Your alt text"
              width={54}
              height={54}
            />
            <div className="">
              <p style={{ fontWeight: 'bold' }}>{userName}</p>
              <p>{position}</p>
            </div>
          </div>
          <div className="emba_slide_user_info">
            <p>{winDate}</p>
            <p>{since}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
