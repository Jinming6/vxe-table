import { App } from 'vue'
import { VxeUI } from '@vxe-ui/core'

import { VxeColumn } from './column'
import { VxeColgroup } from './colgroup'
import { VxeGrid } from './grid'
import { VxeTable } from './table'
import { VxeToolbar } from './toolbar'

import type { VxeGlobalConfig } from '../types'

const components = [
  VxeColumn,
  VxeColgroup,
  VxeGrid,
  VxeTable,
  VxeToolbar
]

// 默认安装
export function install (app: App, options?: VxeGlobalConfig) {
  VxeUI.setConfig(options)
  components.forEach(component => component.install(app))
}

export const modal = VxeUI.drawer
export const drawer = VxeUI.drawer

export * from './ui'

// Components
export * from './table'
export * from './column'
export * from './colgroup'
export * from './grid'
export * from './toolbar'
