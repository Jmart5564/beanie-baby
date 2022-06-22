import { getBeanie } from '../services/adopt-service.js';

import createBeanieDetail from '../components/BeanieDetail.js';
import createBeanieName from '../components/BeanieName.js';

let beanie = {};

async function handlePageLoad() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    if (!id) window.location = '/';

    beanie = await getBeanie(id);

    if (!beanie) window.location = '/';

    display();
}

const BeanieName = createBeanieName(document.querySelector('h1'));
const BeanieDetail = createBeanieDetail(document.querySelector('#beanie-detail'));

function display() {
    BeanieName({ name: beanie.name });
    BeanieDetail({ beanie });
}

handlePageLoad();
