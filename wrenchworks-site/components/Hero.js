'use client'
import LottiePlayer from './LottiePlayer'
export default function Hero(){
  return (
    <section className="flex items-center gap-8">
      <div style={{width:240}}>
        <LottiePlayer src="/lottie/placeholder.json" />
      </div>
      <div>
        <h2 className="text-2xl font-bold">We build hardware & systems</h2>
        <p className="mt-2">Rapid prototyping to production.</p>
      </div>
    </section>
  )
}
