import UserHomePage from '../../src/containers/UserHomePage'
import { MemoryRouter, Route, Switch, NavLink } from 'react-router-dom';
import { mount } from 'enzyme'
import CountTo from 'react-count-to';
import ConcertFormContainer from '../../src/containers/ConcertFormContainer'
import UserConcertInfo from '../../src/components/UserConcertInfo'
import RecentConcert from '../../src/components/RecentConcert'
import TopBandShow from '../../src/components/TopBandShow'
import TopVenue from '../../src/components/TopVenue'
import ShowsPerYear from '../../src/components/ShowsPerYear'


describe('UserHomePage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<MemoryRouter initialEntries={['/users/:id']} initialIndex={0}>
<UserHomePage /></MemoryRouter>)
  })

  // it('should have the specified initial state', () => {
  //   expect(wrapper.state()).toEqual({user: [],
  //   concerts:[],
  //   topBandShows: [],
  //   topVenue: [],
  //   showsPerYear: [] })
  // })
  //
  // it('should render a TopVenue component', () => {
  //   expect(wrapper.find(TopVenue)).toBePresent()
  // })
  //
  // it('should render a TopBandShow component', () => {
  //   expect(wrapper.find(TopBandShow)).toBePresent()
  // })
  //
  // it('should render a ShowsPerYear component', () => {
  //   expect(wrapper.find(ShowsPerYear)).toBePresent()
  // })
  // 
  // it('should render a RecentConcert component', () => {
  //   expect(wrapper.find(RecentConcert)).toBePresent()
  // })


})
