import React from 'react'
import Head from 'next/head'
import Header from './Header'
import styles from '../styles/Home.module.css'
import PropTypes from 'prop-types'

const Layout = ({ children }) => (
	<>
		<Head>
			<title>title</title>
		</Head>

		<Header />

		
		<div className={styles.container}>
			<main className={styles.main}>
				<div className="container">{children}</div>
			</main>

			<footer className={styles.footer}>
				
			</footer>
		</div>
	</>
)

export default Layout

Layout.propTypes = {
  children: PropTypes.node,
}
