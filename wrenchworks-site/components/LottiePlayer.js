'use client'
import { useEffect, useRef } from 'react'
import lottie from 'lottie-web'
export default function LottiePlayer({src, className}){
  const ref = useRef(null)
  useEffect(()=>{
    if(!ref.current) return
    const anim = lottie.loadAnimation({container: ref.current, renderer:'svg', loop:true, autoplay:true, path:src})
    return ()=> anim.destroy()
  },[src])
  return <div ref={ref} className={className} />
}
