import Head from 'next/head'
import fs from 'fs'
export default function Reviews(){
  const copy = fs.readFileSync('./content/service-pages/review-funnels.md','utf8')
  return (
    <div className="max-w-4xl mx-auto p-6">
      <Head><title>Review Funnels — WrenchWorks</title></Head>
      <h1 className="text-3xl font-bold">Review Funnels that build trust and rankings</h1>
      <div className="mt-4 whitespace-pre-line">{copy}</div>
    </div>
  )
}