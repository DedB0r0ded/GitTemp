function Book(price = 0, pages = 0){
    this.m_price = price;
    this.m_pages = pages;
}

Book.prototype.getPrice = ()=>{
    return this.m_price
}

Book.prototype.getPages = ()=>{
    return this.m_pages
}