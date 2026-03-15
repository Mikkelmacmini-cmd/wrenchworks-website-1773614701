import '../styles/globals.css'
import Header from '../components/Header'
export default function App({Component, pageProps}){return (
  <div>
    <Header />
    <main className="pt-6">
      <Component {...pageProps} />
    </main>
  </div>
)}
