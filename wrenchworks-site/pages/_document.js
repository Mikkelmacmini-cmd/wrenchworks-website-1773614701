import Document, { Html, Head, Main, NextScript } from 'next/document'

const criticalCSS = `/*! tailwindcss v4.2.1 | MIT License | https://tailwindcss.com */@layer properties{@supports ((-webkit-hyphens:none) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,::backdrop,:after,:before{--tw-border-style:solid}}}.fixed{position:fixed}.container{width:100%}.mx-auto{margin-inline:auto}.block{display:block}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline-block{display:inline-block}.min-h-screen{min-height:100vh}.w-full{width:100%}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.items-center{align-items:center}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.border{border-style:var(--tw-border-style);border-width:1px}.text-center{text-align:center}.whitespace-pre-line{white-space:pre-line}body{color:#0f172a;background-color:#fff}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}`

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Inline critical CSS to ensure immediate styling */}
          <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
