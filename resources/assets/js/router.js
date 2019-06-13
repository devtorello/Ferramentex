import Vue from 'vue';
import VueRouter from 'vue-router';

import {
  // Statics
  Static, Home, NotFound, Login, Recup,
  // Auth
  Auth, Cart, Products, HomeAu,
  Stock, Regcli, Mancli,
  // Admin
  Admin, Manage, Create, RegProd, Depth, Manclient,
  StockEntry, Sellt, Stockadm, Sellprod, Selldep,
  Sellbrand, Stockentry, HomeAdmin

} from './views';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  linkActiveClass: '',
  linkExactActiveClass: 'active',
  routes: [
    // Static Routes
    { path: '/', component: Static, children: [
      {path: '', component: Home},
      {path: 'login', component: Login},
      {path: 'recupera', component: Recup},
    ]},
    // Auth Pages
    { path: '/auth', component: Auth, children: [
      {path: 'home', component: HomeAu},
      {path: 'cart', component: Cart},
      {path: 'product', component: Products},
      {path: 'stock', component: Stock},
      {path: 'client/create', component: Regcli},
      {path: 'client/manage', component: Mancli}
    ]},
    // Admin Routes
    { path: '/admin', component: Admin, children: [
      {path: 'home', component: HomeAdmin},
      {path: 'employee/create', component: Create},
      {path: 'employee/manage', component: Manage},
      {path: 'employee/managec', component: Manclient},
      {path: 'product/create', component: RegProd},
      {path: 'product/depth', component: Depth},
      {path: 'product/entry', component: StockEntry},
      {path: 'report/sells', component: Sellt},
      {path: 'report/stock', component: Stockadm},
      {path: 'report/sellprod', component: Sellprod},
      {path: 'report/selldep', component: Selldep},
      {path: 'report/sellbrand', component: Sellbrand},
      {path: 'report/stockentry', component: Stockentry}
    ]},
    // Exception Routes
    { path: 'not-found', component: NotFound},
    { path: '*', component: NotFound}
  ]
});
