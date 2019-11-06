import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Navbar from '@/components/Navbar.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Navbar', () => {
    let store;
    let getters;

    beforeEach(() => {
        getters = {
            isAuthenticated: () => true
        };
        store = new Vuex.Store({ getters });
    });
    test('is a Vue instance', () => {
        const wrapper = mount(Navbar, { store, localVue });
        expect(wrapper.isVueInstance()).toBeTruthy();
    });
});
