import React, { Component } from 'react'
import Save from './Save'
import Log from './log'
import { connect } from 'react-redux'
import { getEntries, setContent } from '../store/entry'
new ClipboardJS('.btn')

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
      <div className='spacer'>
        <div className='base64'>
          <form
            className='form'
            onSubmit={evt => {
              evt.preventDefault()
              this.handleSubmit(evt)
            }}
          >
            <div className='plzbuttons'>
              <h2>Convert: </h2>
              <input
                className='input'
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
                className='specialI'
                id='copyboard'
                type='text'
                name='result'
                placeholder='...AND ILL HIT YOU WITH THE INVERSE'
                value={
                  this.isBase64(this.state.text)
                    ? atob(this.state.text)
                    : btoa(this.state.text)
                }
              />

              <div className='buttons'>
                <button type='Submit'>Log this Entry!</button>

                <button
                  type='button'
                  className='btn'
                  data-clipboard-target='#copyboard'
                >
                  Copy to ClipBoard!
                </button>
              </div>
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
