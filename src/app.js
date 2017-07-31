import CONFIG from './config.json'

// import Content from './content/motherhood'
// import Content from './content/princess'
// import Content from './content/friends'
import Content from './content/style_icon'
// import Content from './content/philanthropy'
// import Content from './content/the_firm'
// import Content from './content/weddings'


// import Styles from './app.sass'
import isMobileDevice from './functions/isMobileDevice'
import template from './template'
import header from './headerTemplate'
import Styles from './template.sass'

let STATE = null
const { title, intro, cards } = Content
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

const imageGrid = () => cards
	.map(card => template(card).render())
	.join('')
const headerBlock = () => header({ title, intro })

APP.setAttribute('data-mobile', STATE.mobile)
APP.innerHTML = `<div class="${Styles.container}">${[
	headerBlock().render(),
	imageGrid(),
].join('')}</div>`

console.log({ STATE })
