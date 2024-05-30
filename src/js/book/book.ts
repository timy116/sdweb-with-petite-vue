import {createApp} from 'petite-vue'
import books from '../../data/books.json'

interface book {
	category: string,
	title: string,
	subTitle: string,
	period: string,
	date: string,
	description: string
}

interface tableHead {
	category: string,
	title: string,
	period: string,
	date: string,
	description: string
}

const head: tableHead = {
	category: '類別',
	title: '書名',
	period: '出版週期',
	date: '出版日期',
	description: '說明'
}

const categories: string[] = [
	'畜禽統計調查結果',
	'養豬頭數調查報告',
	'農業及農食鏈統計',
	'糧食供需年報',
	'畜禽產品生產成本與收益',
	'主力農家所得調查結果',
	'農業統計要覽',
	'農業統計年報',
	'農產貿易統計要覽',
	'農業統計月報',
	'其他農業統計專文',
]

const periodCycles: string[] = [
	'',
	'年報',
	'半年報',
	'季報',
	'月報',
	'不定期'
];

// Read boos from books.json
const data: book[] = books as unknown as book[]

createApp({
	head,
	data
}).mount('#table');

createApp({
	categories,
	periodCycles,
}).mount('#category');
