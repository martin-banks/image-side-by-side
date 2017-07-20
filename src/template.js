import createSrcSet from './functions/createSrcSet'
import Styles from './template.sass'

const standardImage = 'Img400'

function template(content) {
	const { leftimage, leftcaption, leftcredit, rightimage, rightcaption, rightcredit, title, intro } = content

	return `<section class="${Styles.section}">
		<div class="${Styles.header}">
			<h2 class="${Styles.header__title}">${title}</h2>
			<p class="${Styles.header__intro}">${intro}</p>
		</div>

		<div class="${Styles.wrapper}">
			<div class="${Styles.left}">
				<img class="${Styles.image}" 
					src="${leftimage[standardImage]}" 
					srcset="${createSrcSet(leftimage)}"
					alt="${leftcaption} / ${leftcredit}" 
				/>
				<p class="${Styles.image__caption}">${leftcaption}</p>
				<p class="${Styles.image__credit}">${leftcredit}</p>
			</div><!--

			--><div class="${Styles.right}">
				<img class="${Styles.image}" 
					src="${rightimage[standardImage]}" 
					srcset="${createSrcSet(rightimage)}"
					alt="${rightcaption} / ${rightcredit}" 
				/>
				<p class="${Styles.image__caption}">${rightcaption}</p>
				<p class="${Styles.image__credit}">${rightcredit}</p>
			</div>
		</div>

	</section>`
}

export default template
