import BoozeYourself from '../src/BoozeYourself';

describe('BoozeYourself', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <BoozeYourself />
    )
  })

  it('should render four a elements', () => {
    expect(wrapper.find('a')).toBePresent()
    expect(wrapper.find('a').length).toEqual(1)
  })

  it('should render an anchor tag with text Booze Yourself', () => {
    expect(wrapper.find('a').at(0).text()).toEqual('Booze Yourself')
  })
})
