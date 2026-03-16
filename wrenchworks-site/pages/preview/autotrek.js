import { useState, useEffect } from 'react'
import Head from 'next/head'

const PREVIEW_PASSWORD = 'autotrek2025'

export default function AutoTrekPreview() {
  const [input, setInput] = useState('')
  const [unlocked, setUnlocked] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = sessionStorage.getItem('preview_autotrek')
      if (stored === 'true') setUnlocked(true)
    }
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    if (input === PREVIEW_PASSWORD) {
      sessionStorage.setItem('preview_autotrek', 'true')
      setUnlocked(true)
      setError(false)
    } else {
      setError(true)
    }
  }

  useEffect(() => {
    if (unlocked) {
      window.location.href = '/preview/autotrek-site/'
    }
  }, [unlocked])

  if (unlocked) {
    return (
      <>
        <Head><title>Redirecting…</title></Head>
        <div style={{ minHeight: '100vh', background: '#0f1a0f', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontFamily: 'sans-serif' }}>
          Loading preview…
        </div>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>Preview — WrenchWorks Digital</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div style={{
        minHeight: '100vh',
        background: '#0f1a0f',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif'
      }}>
        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '48px',
          width: '100%',
          maxWidth: '400px',
          boxShadow: '0 25px 50px rgba(0,0,0,0.4)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <div style={{
              width: '48px', height: '48px',
              background: '#2d6a2d',
              borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 16px',
              fontSize: '20px'
            }}>🔧</div>
            <h1 style={{ fontSize: '20px', fontWeight: '700', margin: '0 0 8px', color: '#111' }}>
              Client Preview
            </h1>
            <p style={{ color: '#666', fontSize: '14px', margin: 0 }}>
              Enter the access code to view the AutoTrek Service Center preview
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="password"
              value={input}
              onChange={e => { setInput(e.target.value); setError(false) }}
              placeholder="Access code"
              autoFocus
              style={{
                width: '100%',
                padding: '12px 16px',
                fontSize: '16px',
                border: error ? '2px solid #c0392b' : '2px solid #e5e7eb',
                borderRadius: '8px',
                outline: 'none',
                boxSizing: 'border-box',
                marginBottom: '8px'
              }}
            />
            {error && (
              <p style={{ color: '#c0392b', fontSize: '13px', margin: '0 0 12px' }}>
                Incorrect access code. Try again.
              </p>
            )}
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '12px',
                background: '#2d6a2d',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '15px',
                fontWeight: '600',
                cursor: 'pointer',
                marginTop: '8px'
              }}
            >
              View Preview →
            </button>
          </form>
          <p style={{ color: '#999', fontSize: '12px', textAlign: 'center', marginTop: '24px', marginBottom: 0 }}>
            Provided by WrenchWorks Digital
          </p>
        </div>
      </div>
    </>
  )
}
