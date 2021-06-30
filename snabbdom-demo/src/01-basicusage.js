import { init } from 'snabbdom/build/package/init'
import { h } from 'snabbdom/build/package/h'
const patch = init([])
// h
// 第一个参数：标签 + 选择器
// 第二个参数：如果是字符串就是标签中的文本内容
let vnode = h('div#container.cls', {
  hook: {
    init (vnode) {
      console.log(vnode.elm)
    },
    create (emptyNode, vnode) {
      console.log(vnode.elm)
    }
  }
}, 'Hello World')
let app = document.querySelector('#app')
// patch
// 第一个参数：就得VNode，可以使DOM元素
// 第二个参数：新的VNode
let oldVnode = patch(app, vnode)

vnode = h('div#container.xxx', 'Hello Snabbdom')
patch(oldVnode, vnode)