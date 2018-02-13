import Home from '../../src/containers/Home'
import { mount } from 'enzyme'

describe('Home', () => {
  let text,
      wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Home
      text="Sign In"
      />
    )
  })

  it('should render an a tag', () => {
    expect(wrapper.find('a').length).toEqual(1);
  })

  it('should render an a tag with the text properity value', () => {
    expect(wrapper.find('a').text()).toBe('Sign In')
  })
})
