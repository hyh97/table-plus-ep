/*
 * @FilePath: \table-plus-ep\src\packages\components\table-plus\index.ts
 * @Author: heyouhua
 * @LastEditors: heyouhua
 * @Description: file content
 */
import { withInstall } from '@/packages/utils/vue'
import _TablePlus from './src/table-plus'

export const TablePlus = withInstall(_TablePlus)
export default TablePlus

export * from './src/table-plus'
