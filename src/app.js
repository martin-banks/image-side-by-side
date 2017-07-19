import CONFIG from './config.json'
import Content from './content/content'
// import Styles from './app.sass'
import isMobileDevice from './functions/isMobileDevice'
import template from './template'

let STATE = null

// We use a function to set various values into state
// this allows us to re-write it all if needed
// for example when resizing the window
// -- move to expternal file --
function storeDataInState() {
	STATE = {
		window: {
			width: window.innerWidth,
			height: window.innerHeight,
		},
		mobile: isMobileDevice(),
		rowWidths: [0],
	}
}
storeDataInState() // immediately set state base values

// we store the project name in the config json file so it can be
// referenced by other functions in particular the webpack config scripts
// here we store the selector for the main app container
const APP = document.querySelector(`#${CONFIG.projectName}`)

const render = () => Content.cards
	.map(card => template(card))
	.join('')

APP.setAttribute('data-mobile', STATE.mobile)
APP.innerHTML = render()

console.log({ STATE })
