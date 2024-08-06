'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { LazyLoadImage } from './emblaCarouselLazyLoadImg'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './emblaCarouselArrowBtn'
import { DotButton, useDotButton } from './emblaCarouselDotBtn'
import Image from 'next/image'

type SlideType = {
  id: number;
  swBgImage: string;
  swUsericon: string;
  userName: string;
  position: string;
  winDate: string;
  since: string;
  background: string;
  beltDiv: string
}

type PropType = {
  slides: SlideType[];
  options?: EmblaOptionsType;

}

export const EmblaCarousel: React.FC<PropType> = (props) => {
  const {
    slides,
    options,
  } = props
  const [emblaRed, emblaApi] = useEmblaCarousel(options)
  const [slidesInView, setSlidesInView] = useState<number[]>([])

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const updateSlidesInView = useCallback((emblaApi: EmblaCarouselType) => {
    setSlidesInView((slidesInView) => {
      if (slidesInView.length === emblaApi.slideNodes().length) {
        emblaApi.off('slidesInView', updateSlidesInView)
      }
      const inView = emblaApi
        .slidesInView()
        .filter((index) => !slidesInView.includes(index))
      return slidesInView.concat(inView)
    })
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    updateSlidesInView(emblaApi)
    emblaApi.on('slidesInView', updateSlidesInView)
    emblaApi.on('reInit', updateSlidesInView)
  }, [emblaApi, updateSlidesInView])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRed}>
        <div className="embla__container">
          {slides.map((index) => (
            <LazyLoadImage
              key={index.id}
              id={index.id}
              swBgImage={index.swBgImage}
              background={index.background}
              beltDiv={index.beltDiv}
              swUsericon={index.swUsericon}
              userName={index.userName}
              position={index.position}
              winDate={index.winDate}
              since={index.since}
            />

          ))}
        </div>
        <div className="embla__buttons">
          <div
            onClick={onPrevButtonClick}
            className="embla-button-div"
          >
            <PrevButton disabled={prevBtnDisabled} />
          </div>
          <div
            onClick={onNextButtonClick}
            className="embla-button-div">
            <NextButton disabled={nextBtnDisabled} />
          </div>
        </div>
      </div>

      <div className="embla__controls">

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={(index === selectedIndex ? 'embla__dot' : 'embla__dot__empty')}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
