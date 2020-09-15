import useUser from '../lib/useUser'
import Layout from '../components/Layout'

const DashboardSg = () => {
	const { user } = useUser({ redirectTo: '/login' })

	if (!user || user.isLoggedIn === false) {
		return <Layout>loading...</Layout>
	}
	
	return(
		<Layout>
			<h1>Dashboard Sg</h1>
			<pre>{JSON.stringify(user, undefined, 2)}</pre>
		</Layout>
	)
}

function githubUrl(login) {
	return `https://api.github.com/users/${login}`
}

export default DashboardSg