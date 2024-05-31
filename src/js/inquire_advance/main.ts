import {createApp} from 'petite-vue'

interface inquireAdvanceProps {
	firstLevel: string
	secondLevel?: string
	items: string[]
	isOdd: boolean
}

interface tableHead {
	mainCategory: string,
	subCategory: string
}

const head: tableHead = {
	mainCategory: '類別',
	subCategory: '細分類'
}

const data: inquireAdvanceProps[] = [
	{
		firstLevel: '地理及環境統計',
		secondLevel: '',
		items: ['土地統計', '環境保護統計', '自然保育統計', '水資源維護統計'],
		isOdd: true
	},
	{
		firstLevel: '勞工統計',
		secondLevel: '',
		items: ['勞動力統計'],
		isOdd: false
	},
	{
		firstLevel: '社會保險及社會指標統計',
		secondLevel: '',
		items: ['社會保險統計', '社會福利統計'],
		isOdd: true
	},
	{
		firstLevel: '國民經濟統計',
		secondLevel: '',
		items: ['家庭收支之統計'],
		isOdd: false
	},
	{
		firstLevel: '農業生產統計',
		secondLevel: '農',
		items: ['農業產值結構與指標', '農產品生產面積統計', '農產品生產量值統計', '農業及農食鏈統計', '農畜產品生產成本統計'],
		isOdd: true
	},
	{
		firstLevel: '',
		secondLevel: '林',
		items: ['林產品生產量值統計', '林地與森林蓄積統計'],
		isOdd: true
	},
	{
		firstLevel: '',
		secondLevel: '漁',
		items: ['水產品生產量值統計'],
		isOdd: true
	},
	{
		firstLevel: '',
		secondLevel: '牧',
		items: ['畜禽產品飼養數量統計', '畜禽產品生產量值統計'],
		isOdd: true
	},
	{
		firstLevel: '農產品運銷統計',
		secondLevel: '',
		items: ['農產品價格統計', '農產品收購統計'],
		isOdd: false
	},
	{
		firstLevel: '農業生產資材與設備統計',
		secondLevel: '',
		items: ['肥料', '農機', '配合飼料與動物藥品', '農藥', '漁船', '土地', '固定資本形成'],
		isOdd: true
	},
	{
		firstLevel: '農家統計',
		secondLevel: '',
		items: ['農家人口特性統計', '農民生產所得所付物價指數'],
		isOdd: false
	},
	{
		firstLevel: '糧食供需統計',
		secondLevel: '',
		items: ['糧食平衡表', '糧食供需指標'],
		isOdd: true
	},
	{
		firstLevel: '農業災害統計',
		secondLevel: '',
		items: ['森林災害統計'],
		isOdd: false
	},
	{
		firstLevel: '其他農業統計',
		secondLevel: '',
		items: ['水土保持統計', ' 動植物防疫檢疫統計', '農田水利統計', '農民團體統計', '家畜保險統計'],
		isOdd: true
	},
	// {
	// 	firstLevel: '服務業統計',
	// 	secondLevel: '',
	// 	items: ['商業貿易統計'],
	// 	isOdd: false
	// },
	// {
	// 	firstLevel: '一般政務統計',
	// 	secondLevel: '',
	// 	items: ['銓敘統計'],
	// 	isOdd: false,
	// },
]

createApp({
	data,
	head
}).mount('#table')