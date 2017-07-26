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
	title: 'Then and Now',
	intro: 'There are deliberate echoes of Diana as William and Catherine combine Royal duties and family life',

	// cards: [
	// 	card1,
	// ],
	cards: [
    {
        "leftimage": balcony_then,
        "leftcaption": "Harry gets cheeky on the Buckingham Palace balcony in 1988.",
        "leftcredit": "Getty",
        "rightimage": balcony_now,
        "rightcaption": "George salutes during last year’s Trooping the Colour.",
        "rightcredit": "Getty"
    },
    {
        "leftimage": rock_then,
        "leftcaption": "Diana and Charles climbed Uluru when they visited Australia in 1983.",
        "leftcredit": "Getty",
        "rightimage": rock_now,
        "rightcaption": "Kate and William took a guided tour around the rockon their visit in 2014.",
        "rightcredit": "Gregg Porteous"
    },
    {
        "leftimage": run_then,
        "leftcaption": "Diana shows her competitive streak as she races to the line at her sons’ school sports day.",
        "rightimage": run_now,
        "rightcaption": "Catherine enthusiastically joins in a kids’ sports event in India. ",
        "rightcredit": "Splash news"
    },
    {
        "leftimage": shorts_then,
        "leftcaption": "William visits his newborn brother Harry in hospital in 1984.",
        "leftcredit": "Getty",
        "rightimage": shorts_now,
        "rightcaption": "Prince George is dressed almost identically for sister Charlotte's christening in 2015.",
        "rightcredit": "Getty"
    }
]
}

export default Content
