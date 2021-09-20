import Layout from 'containers/Layout'
import 'styles/root.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )

}

export default MyApp
