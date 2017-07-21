import createSrcSet from './functions/createSrcSet'
import Styles from './template.sass'

const standardImage = 'Img400'

const titleTemplate = value => `<h2 class="${Styles.header__title}">${value}</h2>`
const introTemplate = value => `<p class="${Styles.header__intro}">${value}</p>`
const imageTemplate = ({ img, caption, credit }) => `<img 
	class="${Styles.image}" 
	src="${img[standardImage]}" 
	srcset="${createSrcSet(img)}"
	alt="${caption} / ${credit}" 
/>`
const captionTemplate = value => `<p class="${Styles.image__caption}">${value}</p>`
const creditTemplate = value => `<p class="${Styles.image__credit}">${value}</p>`

function template(cards) {
	const { leftimage, leftcaption, leftcredit, rightimage, rightcaption, rightcredit, title, intro } = cards

	const render = () => `<section class="${Styles.section}">
		<div class="${Styles.header}">
			${title ? titleTemplate(title) : ''}
			${intro ? introTemplate(intro) : ''}
		</div>

		<div class="${Styles.wrapper}">
			<div class="${Styles.left}">
				${leftimage ? imageTemplate({ img: leftimage, caption: leftcaption || '', credit: leftcredit || '' }) : ''}
				${leftcaption ? captionTemplate(leftcaption) : ''}
				${leftcredit ? creditTemplate(leftcredit) : ''}
			</div><!--

			--><div class="${Styles.right}">
				${rightimage ? imageTemplate({ img: rightimage, caption: rightcaption || '', credit: rightcredit || '' }) : ''}
				${rightcaption ? captionTemplate(rightcaption) : ''}
				${rightcredit ? creditTemplate(rightcredit) : ''}
			</div>
		</div>

	</section>`

	return { render }
}

export default template
