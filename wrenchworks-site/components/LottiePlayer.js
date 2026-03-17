'use client'
import { useEffect, useRef } from 'react'
export default function LottiePlayer({src, className}){
  const ref = useRef(null)
  useEffect(()=>{
    let anim
    if(!ref.current) return
    let mounted = true
    import('lottie-web').then((lottie)=>{
      if(!mounted || !ref.current) return
      anim = lottie.loadAnimation({container: ref.current, renderer:'svg', loop:true, autoplay:true, path:src})
    }).catch(()=>{})
    return ()=>{mounted = false; anim&&anim.destroy()}
  },[src])
  return <div ref={ref} className={className} />
}
