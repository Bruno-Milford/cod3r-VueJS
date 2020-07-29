import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/inicio.vue'
import Menu from './components/template/Menu'
import MenuAlt from './components/template/MenuAlt.vue'
// import Usuario from './components/usuario/Usuario.vue'
// import UsuarioLista from './components/usuario/UsuarioLista.vue'
// import UsuarioDetalhe from './components/usuario/UsuarioDetalhe.vue'
// import UsuarioEditar from './components/usuario/UsuarioEditar.vue'

Vue.use(Router)

const Usuario = () => import(/* webpackChunkName: "usuario" */'./components/usuario/Usuario.vue')
const UsuarioLista = () => import(/* webpackChunkName: "usuario" */'./components/usuario/UsuarioLista.vue')
const UsuarioDetalhe = () => import('./components/usuario/UsuarioDetalhe.vue')
const UsuarioEditar = () => import('./components/usuario/UsuarioEditar.vue') // Isso é uma função o import será feita dinamicamente dps

const router = new Router({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if(savedPosition) {
            return savedPosition
        } else if(to.hash) {
            return {
                selector: to.hash
            }
        } else {
            return { x: 0, y: 0 }
        }

    }, 
    routes: [{
        path: '/',
        //component: Inicio
        components: {
            default: Inicio,
            menu: Menu
        }
    }, {
        path: '/usuario',
        // component: Usuario,
        components: {
            default: Usuario,
            menu: MenuAlt
        },
        props: true,
        children: [
            { path: '', component: UsuarioLista }, 
            { path: ':id', component: UsuarioDetalhe, props: true, beforeEnter: (to, from, next) => {
                console.log('antes da rota -> usuário detalhe')
                next()
            } },
            { path: ':id/editar', component: UsuarioEditar, props: true, name: 'editarUsuario' }
        ]
    }, {
        path: '/redirecionar',
        redirect: '/usuario'
    }, {
        path: '*',
        redirect: '/'
    }]
})

router.beforeEach((to, from, next) => {
    console.log('antes das rotas -> global')
    next()
})

export default router
