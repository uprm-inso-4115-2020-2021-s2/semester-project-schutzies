
/** returns the slug of the given url. */
export const urlSlug = (url: string) => url.substring(url.lastIndexOf('/') + 1)

/** returns the given url without the slug. */
export const domainUrl = (url: string) => url.substring(0, url.lastIndexOf('/'))
