import React from 'react'

import Head from 'next/head'

const Home: React.FC = () => {
  return (
        
    <div>
      <Head>
        <title>Pagefai CMS</title>
        <meta name="description" content="Pagefai CMS" />
      </Head>

      <main>
        <h1>
           Hello World
        </h1>
      </main>

      <footer>
        <p> Footer </p>
      </footer>

    </div>
  )
}

export default Home