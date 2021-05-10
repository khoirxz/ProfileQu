import Head from 'next/head'

import { Navbar } from '../components'

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <h1>Hello Wolrd</h1>

        </div>
    )
}
