/**
 * Action types
 */
export const SEARCH = 'SEARCH'

/**
 * Action creators
 */
export function search (phrase) {
  return { type: SEARCH, phrase }
}
