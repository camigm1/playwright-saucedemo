import { LoginPage } from "./LoginPage";

class Menu extends LoginPage{
    construct(page){
        super(page)
        this.openMenu = page.locator('#react-burger-menu-btn')
        this.closeMenu = page.locator("#react-burger-cross-btn")
        this.allItems = page.locator('[data-test="reset-sidebar-link"]')
        this.dynamicCatalog = page.locator('[data-test="dynamic-catalog-sidebar-link"]')
        this.lazyLoad = page.locator('[data-test="dynamic-catalog-lazy-load-link"]')
        this.spinner = page.locator('[data-test="dynamic-catalog-lazy-load-link"]')
        this.slider = page.locator('[data-test="dynamic-catalog-slider-link"]')
        this.about = page.locator('[data-test="about-sidebar-link"]')
        this.logout = page.locator('[data-test="logout-sidebar-link"]')
        this.resetApp = page.locator('[data-test="reset-sidebar-link"]')
    }
}


module.exports = {Menu}