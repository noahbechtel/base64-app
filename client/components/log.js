import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteEntry, getEntries } from '../store'
new ClipboardJS('.pressy')

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
                  <h3 className='entry'>{entry.content}</h3>
                  <p>{entry.description}</p>
                  <div className='buttons2'>
                    <button
                      onClick={() => {
                        this.props.deleteEntry(entry.id)
                        this.props.getEntryList()
                      }}
                    >
                      Delete
                    </button>
                    <button
                      type='button'
                      className='pressy'
                      data-clipboard-target='#entry'
                    >
                      Copy to clipboard
                    </button>
                  </div>
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
