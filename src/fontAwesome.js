import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faSearch,
  faStar,
  faList,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons'

library.add(faSearch, faStar, faList, faCircleXmark)

export { FontAwesomeIcon }
