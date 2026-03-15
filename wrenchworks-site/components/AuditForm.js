export default function AuditForm(){
  return (
    <form className="mt-6 max-w-xl">
      <label className="block">Company</label>
      <input className="w-full border rounded p-2 mt-1" placeholder="Company name" />
      <label className="block mt-3">Primary contact</label>
      <input className="w-full border rounded p-2 mt-1" placeholder="Name & email" />
      <label className="block mt-3">Notes</label>
      <textarea className="w-full border rounded p-2 mt-1" rows="4" placeholder="Short description of issues" />
      <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded">Request Audit</button>
    </form>
  )
}
