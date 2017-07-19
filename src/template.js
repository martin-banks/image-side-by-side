import createSrcSet from './functions/createSrcSet'
import Styles from './template.sass'

const standardImage = 'Img400'

function template(content) {
	const { left, right, title, intro } = content

	return `<section class="${Styles.section}">
		<div class="${Styles.header}">
			<h2 class="${Styles.header__title}">${title}</h2>
			<p class="${Styles.header__intro}">${intro}</p>
		</div>

		<div class="${Styles.wrapper}">
			<div class="${Styles.left}">
				<img class="${Styles.image}" 
					src="${left.image.src[standardImage]}" 
					${createSrcSet(left.image.src)} 
					alt="${left.image.alt}" 
				/>
				<p class="${Styles.image__caption}">${left.image.alt}</p>
				<p class="${Styles.image__credit}">${left.credit}</p>
			</div><!--

			--><div class="${Styles.right}">
				<img class="${Styles.image}" 
					src="${right.image.src[standardImage]}" 
					${createSrcSet(right.image.src)} 
					alt="${right.image.alt}" 
				/>
				<p class="${Styles.image__caption}">${right.image.alt}</p>
				<p class="${Styles.image__credit}">${right.credit}</p>
			</div>
		</div>

	</section>`
}

export default template
