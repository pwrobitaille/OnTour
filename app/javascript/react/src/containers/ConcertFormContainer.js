import React, { Component } from 'react';
import InputField from '../components/InputField';
import TextField from '../components/TextField';


class ConcertFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      band: "",
      concertYear: "",
      concertVenue: "",
      concertOpener: "",
      concertAttendees: "",
      concertNotes: "",
      concertSetlist: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClearForm = this.handleClearForm.bind(this)
  }

  handleChange(event) {
    let value = event.target.value
    let name = event.target.name

    this.setState({[name]: value})
  }

  handleClearForm(){
    this.state = {
      band: "",
      concertYear: "",
      concertVenue: "",
      concertOpener: "",
      concertAttendees: "",
      concertNotes: "",
      concertSetlist: ""
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    let formPayLoad = {
      band: this.state.band,
      year: this.state.concertYear,
      opener: this.state.concertOpener,
      attendees: this.state.concertAttendees,
      notes: this.state.concertNotes,
      setlist: this.state.concertSetlist
    }
    this.props.addNewArticle(formPayLoad)
    this.handleClearForm()
  }

  render() {
    return(
      <div className="translucent-form-overlay">
        <form>
          <div className="add-new-concert-text">
          <h3 >Add New Concert</h3>
        </div>
          <div className="grid-x cell">
            <InputField
              content={this.state.band}
              label="Band"
              name="band"
            />
          </div>
          <div className="grid-x cell">
            <InputField
              content={this.state.concertYear}
              label="Year"
              name="concertYear"
            />
          </div>
          <div className="grid-x cell">
            <InputField
              content={this.state.concertVenue}
              label="Venue"
              name="concertVenue"
            />
          </div>
          <div className="grid-x cell">
            <InputField
              content={this.state.concertOpener}
              label="Opener"
              name="concertOpener"
            />
          </div>
          <div className="grid-x">
            <TextField
              content={this.state.concertAttendees}
              label="Attendees"
              name="concertAttendees"
            />
            </div>
            <div className="grid-x">
              <TextField
                content={this.state.concertNotes}
                label="Notes"
                name="concertNotes"
              />
            </div>
            <div className="grid-x">
              <InputField
                content={this.state.concertSetlist}
                label="Setlist"
                name="concertSetlist"
              />
            </div>
          <button type="button" className="primary button expanded form-submit-button">
            Search
          </button>
        </form>
      </div>
    )
  }
}
export default ConcertFormContainer
