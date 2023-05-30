export class PrivateRoutes {
    static readonly ROUTES = {
        MAIN: '/',
        HOME: '/home',
        NOT_FOUND: '/*',
        TAB_UNO: '/tab-uno',
        TAB_DOS: '/tab-dos',
        TAB_TRES: '/tab-tres',
    } 

    static readonly LINK = {
        TAB_UNO: this.ROUTES.HOME + this.ROUTES.TAB_UNO,
        TAB_DOS: this.ROUTES.HOME + this.ROUTES.TAB_DOS,
        TAB_TRES: this.ROUTES.HOME + this.ROUTES.TAB_TRES,
    } 
}