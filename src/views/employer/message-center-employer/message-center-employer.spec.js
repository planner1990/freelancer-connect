import Vue from 'vue';
import MessagecenteremployerComponent from './index.vue';

// Here are some Jasmine 2.0 tests, though you can
// use any test runner / assertion library combo you prefer
describe('MessagecenteremployerComponent', () => {
  // Inspect the raw component options
  it('has a created hook', () => {
    // expect(typeof MessagecenteremployerComponent.created).toBe('function');
  })
  // Evaluate the results of functions in
  // the raw component options
  it('sets the correct default data', () => {
    // expect(typeof MessagecenteremployerComponent.data).toBe('function')
    // const defaultData = MessagecenteremployerComponent.data();
    // expect(defaultData.message).toBe('hello!');
  })
  // Inspect the component instance on mount
  it('correctly sets the message when created', () => {
    // const vm = new Vue(MessagecenteremployerComponent).$mount();
    // expect(vm.message).toBe('bye!');
  })
  // Mount an instance and inspect the render output
  it('renders the correct message', () => {
    // const Ctor = Vue.extend(MessagecenteremployerComponent);
    // const vm = new Ctor().$mount();
    // expect(vm.$el.textContent).toBe('bye!');
  })
})