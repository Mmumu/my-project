import { init } from 'snabbdom/build/package/init'
import { h } from 'snabbdom/build/package/h'
import { styleModule } from 'snabbdom/build/package/modules/style'
import { eventListenersModule } from 'snabbdom/build/package/modules/eventlisteners'
let patch = init([
  styleModule,
  eventListenersModule
])
let vnode = h('div', [
  h('h1', { style: { backgroundColor: 'red' } }, 'Hello World'),
  h('p', { on: { click: eventHandler } }, 'Hello P')
])
let app = document.querySelector('#app')
patch(app, vnode)

function eventHandler () {
  console.log('点了~~~~')
}