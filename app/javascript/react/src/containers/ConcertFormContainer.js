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
    this.addNewConcert = this.addNewConcert.bind(this)

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

  addNewConcert(formPayLoad) {
    fetch(`/api/v1/concerts`, {
      method: "POST",
      body: JSON.stringify(formPayLoad),
      credentials: "same-origin",
      headers: {"Content-Type": "application/json"}
    })
    .then(response => {
      return response.json()
    })
    .then(body => {
      this.setState({
        band: body.band,
        concertYear: body.year,
        concertVenue: body.venue,
        concertOpener: body.opener,
        concertAttendees: body.attendees,
        concertNotes: body.notes,
        concertSetlist: body.setlist
      })
    })
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
    this.addNewConcert(formPayLoad)
    this.handleClearForm()
  }

  render() {
    return(
      <div className="translucent-form-overlay">
        <form onSubmit={this.handleSubmit}>
          <div className="add-new-concert-text">
          <h3 >Add New Concert</h3>
        </div>
          <div className="grid-x cell">
            <InputField
              content={this.state.band}
              label="Band"
              name="band"
              handleChange={this.handleChange}
            />
          </div>
          <div className="grid-x cell">
            <InputField
              content={this.state.concertYear}
              label="Year"
              name="concertYear"
              handleChange={this.handleChange}
            />
          </div>
          <div className="grid-x cell">
            <InputField
              content={this.state.concertVenue}
              label="Venue"
              name="concertVenue"
              handleChange={this.handleChange}
            />
          </div>
          <div className="grid-x cell">
            <InputField
              content={this.state.concertOpener}
              label="Opener"
              name="concertOpener"
              handleChange={this.handleChange}
            />
          </div>
          <div className="grid-x">
            <TextField
              content={this.state.concertAttendees}
              label="Attendees"
              name="concertAttendees"
              handleChange={this.handleChange}
            />
            </div>
            <div className="grid-x">
              <TextField
                content={this.state.concertNotes}
                label="Notes"
                name="concertNotes"
                handleChange={this.handleChange}
              />
            </div>
            <div className="grid-x">
              <InputField
                content={this.state.concertSetlist}
                label="Setlist"
                name="concertSetlist"
                handleChange={this.handleChange}
              />
            </div>
          <button onClick={this.handleSubmit} type="button" className="primary button expanded form-submit-button">
            Submit
          </button>
        </form>
      </div>
    )
  }
}
export default ConcertFormContainer
