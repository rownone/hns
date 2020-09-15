import React from 'react'
import Link from 'next/link'
import useUser from '../lib/useUser'
import { useRouter } from 'next/router'
import fetchJson from '../lib/fetchJson'

const Header = () => {
	const { user, mutateUser } = useUser()
	const router = useRouter()
	return(
		<header>
			<Link href="/">
				  <a>Home</a>
				</Link>
		
			<br/>
			
			{!user?.isLoggedIn && (
				<li>
				  <Link href="/login">
					<a>Login</a>
				  </Link>
				</li>
			)}
			  
			<br/>		
			
			{user?.isLoggedIn && (
				<>
					<Link href="/dashboard-sg">
					  <a>
						<img src={user.avatarUrl} width={20} height={20} /> Profile (Static Generation, recommended)
					  </a>
					</Link>
					<br/><br/>
					<Link href="/dashboard-ssr">
						<a>Profile (Server-side Rendering)</a>
					</Link>
				   <br/><br/>
					<a href="/api/logout"
					  onClick={async (e) => {
						e.preventDefault()
						await mutateUser(fetchJson('/api/logout'))
						router.push('/login')
					  }}
					>
					  Logout
					</a>
				</>
			)}
			
			<br/>
			  
		  
		</header>
	)
}

export default Header