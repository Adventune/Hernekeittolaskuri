import Head from 'next/head'

export default function Home() {

    const datesLeft255 = (new Date(2023, 2, 15).getTime() - new Date().getTime()) / (1000 * 3600 * 24) / 7;
    const datesLeft365 = (new Date(2023, 5, 15).getTime() - new Date().getTime()) / (1000 * 3600 * 24) / 7;

    return (
        <main className='flex bg-gray-500 h-screen justify-center items-center text-center'>
            <Head>
                <title>Hernekeittoaamuja!</title>
                <meta name='viewport' content='initial-scale=1, width=device-width'/>
            </Head>

            <div className='text-white'>
                <h1>Palvelusaika 255</h1>
                <h3>Sinulla on <span>{Math.floor(datesLeft255)}</span> hernekeittoaamua jäljellä!</h3>
                <h1 className='mt-10'>Palvelusaika 365</h1>
                <h3>Sinulla on <span>{Math.floor(datesLeft365)}</span> hernekeittoaamua jäljellä!</h3>
            </div>
        </main>
    )
}
