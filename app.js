// import services and utilities
import { getBeanies } from '../services/adopt-service.js';

import createBeanieList from './components/BeanieList.js';
import createPaging from './components/Paging.js';

// import component creators
let page = 1;
let pageSize = 5;
let totalPages = 0;
let beanies = [];

async function handlePageLoad() {
    const params = new URLSearchParams(window.location.search);


    page = Number(params.get('page')) || 1;
    pageSize = Number(params.get('pageSize')) || 5;

    const start = (page - 1) * pageSize;
    const end = (page * pageSize) - 1;

    //beanies = await getBeanies();
    const { data, count } = await getBeanies({ start, end });
    beanies = data;

    totalPages = Math.ceil(count / pageSize);
    display();
}

function handlePaging(change, pageSize) {
    const params = new URLSearchParams(window.location.search);

    if (pageSize) {
        page = Math.max(1, page + change);
    }
    else {
        page = 1;
    }

    params.set('page', page);
    params.set('pageSize', pageSize);
    window.location.search = params.toString();
}

// Create each component: 
// - pass in the root element via querySelector
// - pass any needed handler functions as properties of an actions object
const BeanieList = createBeanieList(document.querySelector('#beanie-list')); 
const Paging = createPaging(document.querySelector('#paging'), { handlePaging });

// Roll-up display function that renders (calls with state) each component
function display() {
    // Call each component passing in props that are the pieces of state this component needs
    Paging({ page, pageSize, totalPages });
    BeanieList({ beanies });
}

// Call display on page load
handlePageLoad();
