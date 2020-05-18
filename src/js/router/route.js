class RouterClass {
    constructor (path) {
        this.routes = {}        // 记录路径标识符对应的cb
        history.replaceState({ path }, null, path)
        this.routes[path] && this.routes[path]()
        window.addEventListener('popstate', e => {
            console.log(e, ' --- e')
            const path = e.state && e.state.path
            this.routes[path] && this.routes[path]()
        })
    }

    /**
     * 初始化
     */
    static init () {
        window.Router = new RouterClass(location.pathname)
        return window.Router
    }

    /**
     * 记录path对应cb
     * @param path 路径
     * @param cb 回调
     */
    route (path, cb) {
        this.routes[path] = cb || function () {}
    }

    /**
     * 触发路由对应回调
     * @param path
     */
    go (path) {
        history.pushState({ path }, null, path)
        this.routes[path] && this.routes[path]()
    }
}

const Router = RouterClass.init()
const ul = document.querySelector('ul')
const ContentDom = document.querySelector('.content-div')
const changeContent = content => (ContentDom.innerHTML = content)

Router.route('/', () => changeContent('默认页面'))
Router.route('/page1', () => changeContent('page1页面'))
Router.route('/page2', () => changeContent('page2页面'))

ul.addEventListener('click', e => {
    if (e.target.tagName === 'A') {
        e.preventDefault()
        Router.go(e.target.getAttribute('href'))
    }
})
