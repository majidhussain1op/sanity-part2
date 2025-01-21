import {defineQuery} from "next-sanity" 

export const SALE_QUERY = defineQuery(`*[_type == 'sale'] | order(name asc)`)