/*
 * @FilePath: \table-plus-ep\src\packages\utils\vue\install.ts
 * @Author: heyouhua
 * @LastEditors: heyouhua
 * @Description: file content
 */
import type { App } from 'vue'
import type { SFCWithInstall } from './typescript'

export const withInstall = <T>(component: T) => {
  ;(component as SFCWithInstall<T>).install = (app: App) => {
    app.component(component.name, component)
  }
  return component as SFCWithInstall<T>
}
