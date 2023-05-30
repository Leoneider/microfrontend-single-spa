export class PublicRoutes {
    static readonly ROUTES = {
        MAIN: '/',
        AUTH: '/auth',
        LOGIN: '/login',
        REMEMBER_USER: '/remember-user',
        FORGOT_PASSWORD: '/forgot-password',
        NOT_FOUND: '/*',
    }

    static readonly LINK = {
        LOGIN: this.ROUTES.AUTH + this.ROUTES.LOGIN
    }
   
}