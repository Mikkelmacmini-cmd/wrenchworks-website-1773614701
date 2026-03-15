export default function CTA({label='Get Started', sub='60-minute scoping call. No disruption.', href='/contact'}){
  return (
    <div className="mt-6">
      <a href={href} className="inline-block bg-blue-600 text-white px-5 py-3 rounded-md font-semibold">{label}</a>
      <div className="text-sm text-gray-600 mt-2">{sub}</div>
    </div>
  )
}
