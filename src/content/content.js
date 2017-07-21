// import card1 from './cards/card_1'
// import * as A from './images/A'
// import * as B from './images/B'

import * as balcony_then from './images/motherhood/balcony_then'
import * as balcony_now from './images/motherhood/balcony_now'
import * as rock_then from './images/motherhood/rock_then'
import * as rock_now from './images/motherhood/rock_now'
import * as run_then from './images/motherhood/run_then'
import * as run_now from './images/motherhood/run_now'
import * as shorts_then from './images/motherhood/shorts_then'
import * as shorts_now from './images/motherhood/shorts_now'

const Content = {
	title: '',
	intro: '',

	// cards: [
	// 	card1,
	// ],
	cards: [
    {
        "leftimage": balcony_then,
        "leftcaption": "A young Harry gets cheeky on the Buckingham Palace balcony in 1988,",
        "leftcredit": "Getty",
        "rightimage": balcony_now,
        "rightcaption": "George salutes during last year’s Trooping the Colour.",
        "rightcredit": "Getty"
    },
    {
        "leftimage": rock_then,
        "leftcaption": "Diana and Charles tour Uluru in 1983",
        "leftcredit": "Getty",
        "rightimage": rock_now,
        "rightcaption": "Kate and William visited in 2014, but unlike his parents did not climb the rock",
        "rightcredit": "Gregg Porteous"
    },
    {
        "leftimage": run_then,
        "leftcaption": "Diana shows her competitive streak as she races to the line at her sons’ school sports day,",
        "rightimage": run_now,
        "rightcaption": "Catherine joins in a kids’ sports event in India. Picture: Splash News",
        "rightcredit": "Splash news"
    },
    {
        "leftimage": shorts_then,
        "leftcaption": "Prince George, right, attends the christening of his sister Charlotte in an outfit nearly identical to the one worn by William when he visited his newborn brother Harry in hospital in 1984",
        "rightimage": shorts_now,
        "rightcredit": "getty"
    }
]
}

export default Content
