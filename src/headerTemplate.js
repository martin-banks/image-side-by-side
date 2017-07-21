
import Styles from './header.sass'

function header({ title, intro }) {
	const render = () => `<section class="${Styles.header}">
		<h2 class="${Styles.header_title}">${title}</h2>
		<h4 class="${Styles.header_intro}">${intro}</h4>
	</section>`

	return { render }
}

export default header
