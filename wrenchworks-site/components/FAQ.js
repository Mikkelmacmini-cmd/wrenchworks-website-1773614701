export default function FAQ({items}){
  return (
    <div className="mt-8 space-y-4">
      {(items||[]).map((q,i)=> (
        <details key={i} className="border rounded p-3">
          <summary className="font-semibold">{q.q}</summary>
          <div className="mt-2 text-sm text-gray-700">{q.a}</div>
        </details>
      ))}
    </div>
  )
}
