import Head from 'next/head'
export default function WebsiteBuild({ copy }){
  return (
    <div className="max-w-4xl mx-auto p-6">
      <Head><title>Website Build — WrenchWorks</title></Head>
      <h1 className="text-3xl font-bold">Website Build for Busy Local Businesses</h1>
      <div className="mt-4 whitespace-pre-line">{copy}</div>
    </div>
  )
}

export async function getStaticProps(){
  const fs = require('fs')
  const path = require('path')
  const file = path.join(process.cwd(), 'content', 'service-pages', 'website-build.md')
  const copy = fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : ''
  return { props: { copy } }
}