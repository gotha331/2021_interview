/*
 * @Files:
 * @Version: 1.0
 * @Author: jiang.liu
 * @Date: 2021-06-10 09:53:29
 * @LastEditors: jiang.liu
 * @LastEditTime: 2021-06-10 10:04:08
 */
declare module '*.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.vue" {
  import { defineComponent, FunctionalComponent } from 'vue';
  const component: ReturnType<typeof defineComponent> | FunctionalComponent;
  export default component;
}