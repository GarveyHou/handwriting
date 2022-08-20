import vnode from './vnode'

export default function(sel, data, params) {
  if (typeof params == 'string' || typeof params == "number") {
    return vnode(sel, data, undefined, params, undefined)
  } else if (Array.isArray(params)) {
    let children = params.map(v => v)
    return vnode(sel, data, children, undefined, undefined)
  }
}