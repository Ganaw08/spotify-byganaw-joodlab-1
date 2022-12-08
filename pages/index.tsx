import type { NextPage } from 'next'
import Head from 'next/head'
import Center from '../components/Center'
import Player from '../components/Player'
import Sidebar from '../components/Sidebar'
import PlaylistContextProvider from '../contexts/PlaylistContext'
import SongContextProvider from '../contexts/SongContext'
import Myfreind from '../Myfriends/src/myfriend'

const Home: NextPage = () => {
	return (
		<div className='bg-black h-screen overflow-hidden'>
			<PlaylistContextProvider >
				<SongContextProvider>
					<Head>
						<title>Spotify</title>
						<meta name='description' content='Spotiy-BYGANAW-JOODLAB-!' />
						<link rel='icon' href='/Spotify.png' />
					</Head>

					<main className='flex'>
						
						<Sidebar />
						
						<Center />
						<Myfreind/>
					</main>

					<div className='sticky bottom-0 text-white'>
						<Player />
					</div>
				</SongContextProvider>
			</PlaylistContextProvider>
		</div>
	)
}

export default Home
