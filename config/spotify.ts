import SpotifyWebApi from 'spotify-web-api-node'

const scopes = [
	'user-read-email',
	'user-read-private',
	'user-library-read',
	'user-top-read',
	'user-read-playback-state',
	'user-modify-playback-state',
	'user-read-currently-playing',
	'user-read-recently-played',
	'user-follow-read',
	"playlist-modify-public",
	'playlist-read-private',
	'playlist-read-collaborative',
	'streaming','app-remote-control'
].join(',')

const spotifyApi = new SpotifyWebApi({
	clientId: process.env.SPOTIFY_CLIENT_ID,
	clientSecret: process.env.SPOTIFY_CLIENT_SECRET
})

export { spotifyApi, scopes }
