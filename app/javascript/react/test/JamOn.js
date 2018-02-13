import JamOn from '../src/JamOn'
import { shallow } from 'enzyme'

describe('JamOn', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <JamOn />
    )
  })

  it('should render Switch component', () => {
    expect(wrapper.find('Switch').length).toEqual(1)
  })

  it('should render four Route components', () => {
    expect(wrapper.find('Route').length).toEqual(4)
  })

  it('should render a Route component', () => {
    expect(wrapper.find('Route').at(0).prop('path')).toEqual('/users/:id')
    expect(wrapper.find('Route').at(1).prop('path')).toEqual('/users/:id/concerts')
    expect(wrapper.find('Route').at(2).prop('path')).toEqual('/users/:id/new-concert')
    expect(wrapper.find('Route').at(3).prop('path')).toEqual('/')
  })
})
