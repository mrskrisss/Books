export interface ICardBook extends Error {
    isbn13?: string
    image?: string
    title?: string
    subtitle?: string | null
    price?: string
    url?: string
    quantity?: number
}
