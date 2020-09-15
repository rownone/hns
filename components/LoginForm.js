import React from 'react'
import PropTypes from 'prop-types'

const LoginForm = ({ errorMessage, onSubmit }) => (
	<form onSubmit={onSubmit}>
		<label>
			<span>Type your GitHub username</span>
			<input type="text" name="username" required />
		</label>

		<button type="submit">Login</button>

		{errorMessage && <p className="error">{errorMessage}</p>}

	</form>
)

export default LoginForm

LoginForm.propTypes = {
	errorMessage: PropTypes.string,
	onSubmit: PropTypes.func,
}
