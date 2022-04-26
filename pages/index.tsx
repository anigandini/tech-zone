import type { NextPage } from 'next'
import Head from 'next/head'
import { User } from '../interfaces/user.interface'
import { Product } from '../interfaces/product.interface'
import { useState } from 'react'
import NavBar from '../components/NavBar'
import illustrations from '../assets/illustrations_sprite.webp'
import icons from '../assets/icons_sprite.webp'
import Footer from '../components/Footer'
import { handlerPoints } from './api/points'


type Props = {
  user: User,
  products: Product[],
  categories: string[]
}

const Home: NextPage<Props> = (props: Props) => {
  const [user, setUser] = useState<User>(props.user)

  const addPoints = async (amount: 1000|5000|7500) => {
    const response = await handlerPoints(amount)
    console.log(response['New Points'])
    setUser({points: response['New Points']})
  }

  return (
    <div>
      <Head>
        <title>Tech Zone | Aerolab</title>
        <meta name="description" content="A beautiful catalog of products" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href={illustrations.src} as="image" />
        <link rel="preload" href={icons.src} as="image" />
      </Head>

      <NavBar user={user} addPoints={addPoints}/>
      <main>
      </main>
      <Footer/>
    </div>
  )
}

export default Home

export async function getStaticProps() {
  const requestHeaders: HeadersInit = new Headers()
  requestHeaders.set('Content-Type', 'application/json')
  requestHeaders.set('Accept', 'application/json')
  requestHeaders.set('Authorization', 'Bearer ' + process.env.NEXT_PUBLIC_API_KEY)

  const userReq = await fetch('https://coding-challenge-api.aerolab.co/user/me', {
    method: 'GET',
    headers: requestHeaders
  }
  )
  const userRes = await userReq.json()
  const user = {
    id: userRes._id,
    name: userRes.name,
    points: userRes.points,
    redeemHistory: userRes.redeemHistory,
  }

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
