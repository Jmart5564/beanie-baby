// import services and utilities
import { getBeanies } from '../services/adopt-service.js';

import createBeanieList from './components/BeanieList.js';
// import component creators
let beanies = [];

async function handlePageLoad() {
    beanies = await getBeanies();

    display();
}

// Create each component: 
// - pass in the root element via querySelector
// - pass any needed handler functions as properties of an actions object
const BeanieList = createBeanieList(document.querySelector('#beanie-list')); 

// Roll-up display function that renders (calls with state) each component
function display() {
    // Call each component passing in props that are the pieces of state this component needs
    BeanieList({ beanies });
}

// Call display on page load
handlePageLoad();
