import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteEntry, getEntries } from '../store'

const mapToProps = state => {
  return { entries: state.entry.entries }
}
const mapDispatch = dispatch => {
  return {
    getEntryList: () => dispatch(getEntries()),
    deleteEntry: id => dispatch(deleteEntry(id))
  }
}
class Log extends Component {
  constructor () {
    super()
    this.state = {
      entries: []
    }
  }
  componentDidMount () {
    if (this.props.entries) {
      this.setState({
        entries: this.props.entries
      })
    }
    console.log(this.state)
  }

  isBase64 = str => {
    try {
      return btoa(atob(str)) == str
    } catch (err) {
      return false
    }
  }

  render () {
    const entries = this.state.entries
    return (
      <div>
        {entries ? (
          entries.map(entry => {
            return (
              <div className='spacer' key={entry.id}>
                <div className='list'>
                  <h2>{entry.title}</h2>
                  <h3>{entry.content}</h3>
                  <p>{entry.description}</p>

                  <button
                    onClick={() => {
                      this.props.deleteEntry(entry.id)
                      this.props.getEntryList()
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            )
          })
        ) : (
          <h3>No History</h3>
        )}
      </div>
    )
  }
}

export default connect(
  mapToProps,
  mapDispatch
)(Log)
