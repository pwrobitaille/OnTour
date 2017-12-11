import React, {Component} from 'react';
import InputField from '../components/InputField';
import TextField from '../components/TextField';

class UpdateConcertForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      concerts: [],
      band: '',
      year: '',
      venue: '',
      opener: '',
      attendees: '',
      notes: '',
      setlist: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
      fetch(`/api/v1/users/${this.props.userId}/concerts/${this.props.concertId}/edit`, {
        credentials: 'same-origin',
        method: 'GET',
        headers: { 'Content-Type':'application/json'}
      })
        .then(response => {
          debugger
          response.json()
        })
        .then(body => {
          this.setState({
            concerts: body,
            band: body.band,
            year: body.last_name,
            venue: body.age,
            opener: body.address,
            attendees: body.phone_number,
            notes: body,
            setlist: body,
          })
        })
      }

      handleChange(event) {
        let value = event.target.value
        let name = event.target.name

        this.setState({[name]: value})
      }

      handleSubmit(event) {
        event.preventDefault();
        let formPayLoad = {
          band: this.state.band,
          year: this.state.year,
          venue: this.state.venue,
          opener: this.state.opener,
          attendees: this.state.attendees,
          notes: this.state.notes,
          setlist: this.state.setlist
        }
        this.updateConcert(formPayLoad)
      }

  render() {

    return(
      <div className="translucent-form-overlay">
        <form onSubmit={this.handleSubmit}>
          <div className="add-new-concert-text">
          <h3 >Update Concert</h3>
        </div>
            <InputField
              content={this.state.band}
              bands={this.state.band}
              label="Band"
              name="band"
              value={this.state.band}
              handleChange={this.handleChange}
            />
          <div>
            <InputField
              content={this.state.year}
              label="Year"
              name="year"
              value={this.state.year}
              handleChange={this.handleChange}
            />
          </div>
          <div>
            <InputField
              content={this.state.venue}
              label="Venue"
              name="venue"
              value={this.state.venue}
              handleChange={this.handleChange}
            />
          </div>
          <div>
            <InputField
              content={this.state.opener}
              label="Opener"
              name="opener"
              value={this.state.opener}
              handleChange={this.handleChange}
            />
          </div>
          <div>
            <TextField
              content={this.state.attendees}
              label="Attendees"
              name="attendees"
              value={this.state.attendees}
              handleChange={this.handleChange}
            />
            </div>
            <div>
              <TextField
                content={this.state.notes}
                label="Notes"
                name="notes"
                value={this.state.notes}
                handleChange={this.handleChange}
              />
            </div>
            <div>
              <InputField
                content={this.state.setlist}
                label="Setlist"
                name="setlist"
                value={this.state.setlist}
                handleChange={this.handleChange}
              />
            </div>
          <button onClick={this.props.updateConcert} type="button" className="form-submit-button button">
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default UpdateConcertForm
