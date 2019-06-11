import './styles/index.scss'
import {
  TcBadge,
  TcBlock,
  TcButton,
  TcButtonGroup,
  TcCheckbox,
  TcCheckboxButton,
  TcCheckboxGroup,
  TcDatePicker,
  TcDateTimePicker,
  TcDialog,
  TcEditTable,
  TcEditTreeTable,
  TcFieldset,
  TcFixedBottom,
  TcForm,
  TcFormItem,
  TcHotTable,
  TcInput,
  TcInputMoney,
  TcInputNumber,
  TcInputTag,
  TcLetterAvatar,
  TcPager,
  TcRadio,
  TcRadioButton,
  TcRadioGroup,
  TcSelect,
  TcSwitch,
  TcTable,
  TcTabs,
  TcTag,
  TcTimePicker,
  TcTree,
  TcTreeTable,
  TcXgPlayer
} from '../packages/tennetcn-ui'

import utilLib from './utils/util-lib'

const components = [
  utilLib,
  TcBadge,
  TcBlock,
  TcButton,
  TcButtonGroup,
  TcCheckbox,
  TcCheckboxButton,
  TcCheckboxGroup,
  TcDatePicker,
  TcDateTimePicker,
  TcDialog,
  TcEditTable,
  TcEditTreeTable,
  TcFieldset,
  TcFixedBottom,
  TcForm,
  TcFormItem,
  TcHotTable,
  TcInput,
  TcInputMoney,
  TcInputNumber,
  TcInputTag,
  TcLetterAvatar,
  TcPager,
  TcRadio,
  TcRadioButton,
  TcRadioGroup,
  TcSelect,
  TcSwitch,
  TcTable,
  TcTabs,
  TcTag,
  TcTimePicker,
  TcTree,
  TcTreeTable,
  TcXgPlayer
]
import ElementUI from 'element-ui'

const install = function(Vue, opts = {}) {
  Vue.use(ElementUI)
  components.forEach(component => {
    Vue.use(component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '0.0.21',
  install,
  utilLib,
  TcBadge,
  TcBlock,
  TcButton,
  TcButtonGroup,
  TcCheckbox,
  TcCheckboxButton,
  TcCheckboxGroup,
  TcDatePicker,
  TcDateTimePicker,
  TcDialog,
  TcEditTable,
  TcEditTreeTable,
  TcFieldset,
  TcFixedBottom,
  TcForm,
  TcFormItem,
  TcHotTable,
  TcInput,
  TcInputMoney,
  TcInputNumber,
  TcInputTag,
  TcLetterAvatar,
  TcPager,
  TcRadio,
  TcRadioButton,
  TcRadioGroup,
  TcSelect,
  TcSwitch,
  TcTable,
  TcTabs,
  TcTag,
  TcTimePicker,
  TcTree,
  TcTreeTable,
  TcXgPlayer
}
