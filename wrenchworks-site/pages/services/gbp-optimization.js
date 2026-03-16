import Head from 'next/head'
const copy = `Your Google Business Profile is a top source of local leads—if it's accurate and active. Many businesses lose visibility because their GBP is incomplete, inconsistent, or inactive. We fix that with a focused optimization package that turns your profile into a conversion asset.

Our service includes a full audit, accurate categories and attributes, professional photo guidance, weekly post cadence, Q&A and product/service entries, and templates for responding to reviews. We also supply a one-page action plan of quick wins you can implement this week to start seeing improvements.

Service highlights
- GBP audit and clean-up of inaccurate info
- Photo strategy, posts, and attributes to signal activity
- Q&A, services, and menu/product entries where applicable
- Review response templates and simple editorial calendar

CTA: Start with a GBP audit — get a 1-page action plan with quick wins.`
export default function GBP(){
  return (
    <>
      <Head><title>Google Business Profile Optimization — WrenchWorks</title></Head>
      <div style={{ backgroundColor: "#1a2332" }} className="px-6 pt-8 pb-0">
        <div className="max-w-4xl mx-auto">
          <img
            src="/images/diagnostic_dashboard_mock.png"
            className="w-full max-h-96 object-cover rounded-lg shadow-lg"
            alt="Google Business Profile Optimization"
          />
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-4xl mx-auto p-6">
          <h1 className="text-3xl font-bold">Google Business Profile Optimization</h1>
          <div className="mt-4 whitespace-pre-line">{copy}</div>
        </div>
      </div>
    </>
  )
}
