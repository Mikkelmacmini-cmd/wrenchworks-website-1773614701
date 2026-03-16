import Head from 'next/head'
export default function WebsiteBuild({ copy }){
  return (
    <>
      <Head><title>Website Build — WrenchWorks</title></Head>
      <div style={{ backgroundColor: "#1a2332" }} className="px-6 pt-8 pb-0">
        <div className="max-w-4xl mx-auto">
          <img
            src="/images/hero_shop_owner_laptop.png"
            className="w-full max-h-96 object-cover rounded-lg shadow-lg"
            alt="Website Build"
          />
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-4xl mx-auto p-6">
          <h1 className="text-3xl font-bold">Website Build for Busy Local Businesses</h1>
          <div className="mt-4 whitespace-pre-line">{copy}</div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps(){
  const fs = require('fs')
  const path = require('path')
  const file = path.join(process.cwd(), 'content', 'service-pages', 'website-build.md')
  const copy = fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : ''
  return { props: { copy } }
}
