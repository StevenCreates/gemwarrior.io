import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  if (typeof window === 'undefined') {
    return null
  } else {
  return <Component {...pageProps} />
  }
}

export default MyApp
