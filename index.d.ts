declare function injectToHtml(node: Element, parentNode?: Element): void

interface LoadRemoteOptions {
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

declare function loadRemote(
  url: string,
  options?: LoadRemoteOptions,
): Promise<
  | {
      target: Element
    }
  | Event
>

export { LoadRemoteOptions, injectToHtml, loadRemote }
