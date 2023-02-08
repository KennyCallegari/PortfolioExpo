import React, { useState } from "react"

import Slider from "./Slider"
import Slide from "./Slide"

export interface LiquidSwipeProps {
  slides: Slide[]
}

export function LiquidSwipe(props: LiquidSwipeProps) {
  const { slides } = props
  const [index, setIndex] = useState(0)
  const prev = slides[index - 1]
  const next = slides[index + 1]

  return (
    <Slider
      key={index}
      index={index}
      setIndex={setIndex}
      prev={prev && <Slide slide={prev} />}
      next={next && <Slide slide={next} />}
    >
      <Slide slide={slides[index]!} />
    </Slider>
  )
}

export default LiquidSwipe
