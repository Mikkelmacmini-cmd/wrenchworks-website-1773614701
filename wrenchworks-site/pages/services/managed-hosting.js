import Head from 'next/head'
const copy = `Hosting shouldn't be another thing on your to-do list. Slow servers, missed updates, and unreliable backups damage SEO and cost customers. Our managed hosting removes that burden with a stack tuned for speed, security, and uptime.

We provide CDN-backed delivery, automated nightly backups, one-click staging environments, SSL provisioning, and proactive monitoring so issues are caught and fixed before they affect customers. Regular security patching and performance reviews keep your site fast and safe, and our support team is available when you need guidance.

Key features
- Fast CDN and optimized caching for snappy page loads
- Automated backups and easy restores
- Staging sites for testing updates before they go live
- SSL, security patching, and malware monitoring
- Clear support SLAs and migration assistance

CTA: Request a hosting health check and migration quote — we'll assess your site and recommend a plan that reduces risk and frees your time.`
export default function Hosting(){
  return (
    <>
      <Head><title>Managed Hosting — WrenchWorks</title></Head>
      <div style={{ backgroundColor: "#1a2332" }} className="px-6 pt-8 pb-0">
        <div className="max-w-4xl mx-auto">
          <img
            src="/images/topdown_laptop_coffee_paperwork.png"
            className="w-full max-h-96 object-cover rounded-lg shadow-lg"
            alt="Managed Hosting"
          />
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-4xl mx-auto p-6">
          <h1 className="text-3xl font-bold">Managed Hosting for reliable, fast websites</h1>
          <div className="mt-4 whitespace-pre-line">{copy}</div>
        </div>
      </div>
    </>
  )
}
