import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = (props: any) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tech Zone | Aerolab</title>
        <meta name="description" content="A beautiful catalog of products" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/anigandini/tech-zone"
          target="_blank"
          rel="noopener noreferrer"
        >
          View this repository
        </a>
      </footer>
    </div>
  )
}

export default Home

export async function getStaticProps() {
  const requestHeaders: HeadersInit = new Headers()
  requestHeaders.set('Content-Type', 'application/json')
  requestHeaders.set('Accept', 'application/json')
  requestHeaders.set('Authorization', 'Bearer ' + process.env.API_KEY)

  const userRes = await fetch('https://coding-challenge-api.aerolab.co/user/me', {
    method: 'GET',
    headers: requestHeaders
  }
  )
  const user = await userRes.json()

  const productsRes = await fetch('https://coding-challenge-api.aerolab.co/products', {
    method: 'GET',
    headers: requestHeaders
  }
  )
  
  const products = await productsRes.json()

  const categories: string[] = ['All products']
  products.forEach((product:any) => {
    if(!categories.includes(product.category)){
      categories.push(product.category)
    }
  })
  
  return {
    props: {
      user,
      products,
      categories
    },
  }

}
