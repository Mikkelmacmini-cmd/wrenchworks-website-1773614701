import Head from 'next/head'
import fs from 'fs'
export default function WebsiteBuild(){
  const copy = fs.readFileSync('./content/service-pages/website-build.md','utf8')
  return (
    <div className="max-w-4xl mx-auto p-6">
      <Head><title>Website Build — WrenchWorks</title></Head>
      <h1 className="text-3xl font-bold">Website Build for Busy Local Businesses</h1>
      <div className="mt-4 whitespace-pre-line">{copy}</div>
    </div>
  )
}