import Head from 'next/head'
const copy = `If your customers can't find you on Google, they're finding your competitors. Local SEO focuses on the signals that move the needle for neighborhood searches: optimized city and service pages, a healthy Google Business Profile, consistent citations, and tracking that ties effort to real customer actions.

We build a prioritized local roadmap: keyword-focused landing pages, on-page geo-schema, Google Business Profile optimization, citation cleanup, and call/direction tracking so you can see what's actually driving visits. Our work is practical—quick wins up front and measurable improvements over 90 days.

What you get
- Strategic city & service pages that rank for local intent
- GBP signals: accurate info, photos, posts, and review response templates
- Citation audit and cleanup to remove conflicting listings
- Tracking for calls, clicks, and driving directions; monthly reports

Start with a free audit to see where you rank and a prioritized roadmap to improve local visibility.

CTA: Book an audit to get your Local SEO action plan.`
export default function LocalSEO(){
  return (
    <>
      <Head><title>Local SEO — WrenchWorks</title></Head>
      <div style={{ backgroundColor: "#1a2332" }} className="px-6 pt-8 pb-0">
        <div className="max-w-4xl mx-auto">
          <img
            src="/images/scene-02.png"
            className="w-full max-h-96 object-cover rounded-lg shadow-lg"
            alt="Local SEO"
          />
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-4xl mx-auto p-6">
          <h1 className="text-3xl font-bold">Local SEO that gets customers through your door</h1>
          <div className="mt-4 whitespace-pre-line">{copy}</div>
        </div>
      </div>
    </>
  )
}
