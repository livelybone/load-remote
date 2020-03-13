import { promiseOnPending } from '@livelybone/singleton'

export function injectToHtml(node: Element, parentNode?: Element) {
  const { id } = node
  if (!document.getElementById(id)) {
    const $parentNode = parentNode || document.head
    $parentNode.appendChild(node)
  }
}

export interface LoadRemoteOptions {
  id?: string
  tagName?: 'link' | 'script'
  type?: string
  rel?: string
  charset?: string
  /**
   * Default: document.head
   * */
  injectParentElement?: Element
}

export function loadRemote(
  url: string,
  options?: LoadRemoteOptions,
): Promise<{ target: Element } | Event> {
  if (!url)
    return Promise.reject(new Error('The params url should not be empty'))

  const id = (options && options.id) || url

  return promiseOnPending(
    () =>
      new Promise((res, rej) => {
        const target = document.getElementById(id)
        if (target) return res({ target })

        const isCss = /\.css$/.test(url)
        const isJs = /\.js$/.test(url)
        const tagName =
          (options && options.tagName) ||
          (isCss ? 'link' : isJs ? 'script' : '')

        if (!tagName) {
          return rej(
            new Error('Please set the tagName of this remote resource'),
          )
        }

        const type =
          (options && options.type) ||
          (isCss ? 'text/css' : isJs ? 'text/javascript' : '')

        if (!type) {
          return rej(
            new Error(
              'Please provide the type attribute of this remote resource',
            ),
          )
        }

        const rel =
          (options && options.rel) ||
          (isCss ? 'stylesheet' : isJs ? 'prefetch' : '')
        const charset = (options && options.charset) || 'utf-8'
        const injectParentElement =
          (options && options.injectParentElement) || document.head

        const el = document.createElement(tagName)
        el.type = type
        el.charset = charset
        if (id) el.id = id
        if (tagName === 'link') {
          if (rel) el.setAttribute('rel', rel)
          el.setAttribute('href', url)
        } else el.setAttribute('src', url)
        el.onload = res as any
        el.onerror = (e: Event | string) => {
          rej(e)
          injectParentElement.removeChild(el)
        }
        injectParentElement.appendChild(el)
      }),
    { id },
  )
}
