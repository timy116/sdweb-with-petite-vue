import { createApp } from 'vue'
import Navbar from '../../components/Navbar.vue'
import Footer from '../../components/Footer.vue'
import '../../css/SDWeb.css'
import '../../css/SDWeb_extend.css'
import 'bootstrap/dist/css/bootstrap.css'
import '../../css/inquire_advance.scss'
import '../../css/navbar.scss'
import '../../css/footer.scss'
import '../../css/book.scss'
import 'bootstrap/js/index.esm.js'
import './book.ts'

createApp(Navbar).mount('#app')
createApp(Footer).mount('#footer')