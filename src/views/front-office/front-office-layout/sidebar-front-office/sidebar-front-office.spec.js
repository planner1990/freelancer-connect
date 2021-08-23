import Vue from 'vue';
import SidebarfrontofficeComponent from './index.vue';

// Here are some Jasmine 2.0 tests, though you can
// use any test runner / assertion library combo you prefer
describe('SidebarfrontofficeComponent', () => {
  // Inspect the raw component options
  it('has a created hook', () => {
    // expect(typeof SidebarfrontofficeComponent.created).toBe('function');
  })
  // Evaluate the results of functions in
  // the raw component options
  it('sets the correct default data', () => {
    // expect(typeof SidebarfrontofficeComponent.data).toBe('function')
    // const defaultData = SidebarfrontofficeComponent.data();
    // expect(defaultData.message).toBe('hello!');
  })
  // Inspect the component instance on mount
  it('correctly sets the message when created', () => {
    // const vm = new Vue(SidebarfrontofficeComponent).$mount();
    // expect(vm.message).toBe('bye!');
  })
  // Mount an instance and inspect the render output
  it('renders the correct message', () => {
    // const Ctor = Vue.extend(SidebarfrontofficeComponent);
    // const vm = new Ctor().$mount();
    // expect(vm.$el.textContent).toBe('bye!');
  })
})