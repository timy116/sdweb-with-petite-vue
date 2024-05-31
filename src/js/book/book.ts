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
	'全部',
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
	selectedCount: categories.length - 1,
	allChecked: true,
	buttonText: '全部',
	categories,
	periodCycles,
	toggleAllCheckboxes(event: PointerEvent, category: string) {
		const isChecked = (event.target as HTMLInputElement).checked

		if (category === '全部') {
			this.buttonText = isChecked ? '全部' : '未選取'
			isChecked ? this.selectedCount = this.categories.length - 1 : this.selectedCount = 0
			this.allChecked = isChecked;

			this.$nextTick(() => {
				document.querySelectorAll('.form-check-input').forEach((el: Element) => {
					(el as HTMLInputElement).checked = isChecked
				})
			})
		} else {
			if (isChecked) {
				this.selectedCount++
			} else {
				this.selectedCount--

				const el = document.getElementById('cb-0') as HTMLInputElement
				if (el.checked) {
					el.checked = false
				}
			}

			if (this.selectedCount === 0) {
				this.allChecked = false
				this.buttonText = '未選取'
			} else {
				this.buttonText = `已選取 ${this.selectedCount} 項`
			}
		}
	}
}).mount('#category');
