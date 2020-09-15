import { useState } from 'react'
import useUser from '../lib/useUser'
import Layout from '../components/Layout'
import LoginForm from '../components/LoginForm'
import fetchJson from '../lib/fetchJson'

const Login = () => {
	const { mutateUser } = useUser({
		redirectTo: '/dashboard-sg',
		redirectIfFound: true,
	})

	const [errorMsg, setErrorMsg] = useState('')

	async function handleSubmit(e) {
		e.preventDefault()

		const body = {
			username: e.currentTarget.username.value,
		}

		try {
			await mutateUser(
				fetchJson('/api/login', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(body),
				})
			)
		} catch (error) {
			console.error('An unexpected error happened:', error)
			setErrorMsg(error.data.message)
		}
	}

	return (
		<Layout>
			<div className="login">
				<LoginForm isLogin errorMessage={errorMsg} onSubmit={handleSubmit} />
			</div>
		</Layout>
	)
}

export default Login
