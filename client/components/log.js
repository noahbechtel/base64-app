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
    deleteEntry: () => dispatch(deleteEntry())
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
        <div className='spacer'>
          <div className='log'>
            <h2>History</h2>
            <div className='spacer'>
              <button
                onClick={() => {
                  this.props.deleteEntry()
                  this.props.getEntryList()
                  this.props.history.push('/')
                }}
              >
                Clear History
              </button>
            </div>
          </div>
        </div>
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
