import React, { Component } from 'react'
import Save from './Save'
import Log from './log'
import { connect } from 'react-redux'
import { getEntries, setContent } from '../store/entry'

const mapToProps = state => {
  return { entries: state.entry.entries }
}
const mapDispatch = dispatch => {
  return {
    getEntryList: () => dispatch(getEntries()),
    setContent: str => dispatch(setContent(str))
  }
}

class Base64 extends Component {
  constructor () {
    super()
    this.state = {
      text: '',
      entries: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount () {
    this.props.getEntryList()
    this.setState({ entries: this.props.entries })
  }

  handleSubmit = evt => {
    const str = evt.target.result.value
    this.setState({ text: '', entries: this.props.entries })
    this.props.setContent(str)
    this.props.history.push('/save')
  }

  isBase64 = str => {
    try {
      return btoa(atob(str)) === str
    } catch (err) {
      return false
    }
  }

  render () {
    return (
      <div className='base64main'>
        <div className='base64'>
          <form
            className='form'
            onSubmit={evt => {
              evt.preventDefault()
              this.handleSubmit(evt)
            }}
          >
            <div>
              <h2>Convert: </h2>
              <input
                type='text'
                placeholder='Whip out some Base64 or plain text...'
                onChange={evt => {
                  this.setState({
                    text: evt.target.value
                  })
                }}
                value={this.state.text}
              />
              <h2>Output:</h2>
              <input
                type='text'
                name='result'
                placeholder='...and I will hit you with the inverse'
                value={
                  this.isBase64(this.state.text)
                    ? atob(this.state.text)
                    : btoa(this.state.text)
                }
              />
              <button type='Submit'>Remember</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default connect(
  mapToProps,
  mapDispatch
)(Base64)
