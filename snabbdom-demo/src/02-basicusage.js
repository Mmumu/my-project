import { init } from 'snabbdom/build/package/init'
import { h } from 'snabbdom/build/package/h'
const patch = init([])
let vnode = h('div#container.cls', [
  h('h1', 'Hello Snabbdom'),
  h('p', '这是一个P')
])
let app = document.querySelector('#app')
let oldVnode = patch(app, vnode)