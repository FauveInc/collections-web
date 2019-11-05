import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import store from '@/store/index';
import Navbar from '@/components/Navbar.vue';

describe('Navbar', () => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    test('is a Vue instance', () => {
        const wrapper = mount(Navbar, { store, localVue });
        expect(wrapper.isVueInstance()).toBeTruthy();
    });
});
