import React from 'react'

class Header extends React.Component {
	render() {
		return (
			<header>
				<div class='panel'>
					<div class='panel__logo'>
						<img src='../img/logo.svg' alt='#' />
						<p>P4VUK</p>
					</div>
					<nav class='panel__navigate'>
						<a href='8.8.8.8'>About me</a>
						<a href='#'>Skills</a>
						<a href='#'>Project</a>
						<a href='#'>Contact me</a>
					</nav>
					<button class='panel__button'>
						Resume
						<img src='../img/download.svg' alt='' />
					</button>
				</div>
			</header>
		)
	}
}

export default Header
