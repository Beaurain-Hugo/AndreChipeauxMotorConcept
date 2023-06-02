import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PresentationView from '../views/PresentationView.vue'
import PalmaresView from '../views/PalmaresView.vue'
import LivredOrView from '../views/LivredOrView.vue'
import ContactView from '../views/ContactView.vue'
import GalerieView from '../views/GalerieView.vue'
import ExpertiseView from '../views/ExpertiseView.vue'
import AjouterAvisView from '../views/AjouterAvisView.vue'
import AjouterPalmaresView from '../views/AjouterPalmaresView.vue'
import MentionsLegalesView from '../views/MentionsLegalesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/presentation', name: 'presentation', component: PresentationView },
    { path: '/palmares', name: 'palmares', component: PalmaresView },
    { path: '/livredor', name: 'livredor', component: LivredOrView },
    { path: '/contact', name: 'contact', component: ContactView },
    { path: '/galerie', name: 'galerie', component: GalerieView },
    { path: '/expertise', name: 'expertise', component: ExpertiseView },
    { path: '/ajouteravisview', name: 'ajouteravisview', component: AjouterAvisView },
    { path: '/ajouterpalmaresview', name: 'ajouterpalmaresview', component: AjouterPalmaresView },
    { path: '/mentionslegales', name: 'mentionslegalesview', component: MentionsLegalesView },
  ]
})

export default router
