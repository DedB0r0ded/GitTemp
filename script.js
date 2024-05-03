let book = {
    m_price: 0,
    m_pages: 3,
    m_currentPage: 1,

    create: (price = 0, pages = 3, currentPage = 1) =>{
        let book = Object.create(this)
        book.m_price = price
        book.m_pages = pages
        book.m_currentPage = currentPage
        return book
    },

    price: ()=>{
        return this.m_price
    },

    pages: ()=>{
        return this.m_pages
    },

    currentPage: ()=>{
        return this.currentPage
    }
}