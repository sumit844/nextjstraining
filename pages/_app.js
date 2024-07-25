import Layout from "../src/components/layout";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import "../styles/globals.css";

import "../styles/about.scss"



export default function App({ Component, pageProps }) {
  return (
    <Layout footerStatus={pageProps.footerStatus}>
      <Component {...pageProps} />
    </Layout>

  )
}
