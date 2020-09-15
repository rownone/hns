import fetchJson from '../../lib/fetchJson'
import withSession from '../../lib/session'

export default withSession(async (req, res) => {
	const { username } = await req.body
	console.log(username);
	const url = `https://api.github.com/users/${username}`
	//const url = `http://localhost:8080/site/login2?username=admin&password=admin`
	//const url = `https://manage.vnoc.com/index.php/handshake/t`
	try {
		// we check that the user exists on GitHub and store some data in session
		const { login, avatar_url: avatarUrl } = await fetchJson(url)
		const user = { isLoggedIn: true, login, avatarUrl }
		req.session.set('user', user)
		await req.session.save()
		res.json(user)
	} catch (error) {
		const { response: fetchResponse } = error
		res.status(fetchResponse?.status || 500).json(error.data)
	}
})
