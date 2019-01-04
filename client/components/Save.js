import React, { Component } from 'react'
import { connect } from 'react-redux'
import { makeEntry, getEntries } from '../store/entry'

const mapToProps = state => {
  return { content: state.entry.content }
}

const mapDispatch = dispatch => {
  return {
    makeEntry: entry => dispatch(makeEntry(entry)),
    getEntryList: () => dispatch(getEntries())
  }
}

class Save extends Component {
  constructor () {
    super()
    this.state = {
      title: '',
      content: '',
      description: ''
    }
  }
  componentDidMount () {
    this.setState({ content: this.props.content })
    if (!this.props.content) {
      this.props.history.push('/')
    }
  }
  render () {
    return (
      <div className='spacer'>
        <div className='base64'>
          <form>
            <div>
              <h3>Title:</h3>
              <input
                placeholder='Slap a title on that badboy'
                type='text'
                className='input'
                name='Title'
                onChange={evt => {
                  this.setState({
                    title: evt.target.value
                  })
                }}
              />
              <h3>Content:</h3>
              <input
                type='text'
                name='Content'
                className='input'
                defaultValue={this.props.content}
                onChange={evt => {
                  this.setState({
                    content: evt.target.value
                  })
                }}
              />
              <h3>Description:</h3>
              <input
                type='text'
                name='Content'
                className='input'
                placeholder='Tell me about it'
                onChange={evt => {
                  this.setState({
                    description: evt.target.value
                  })
                }}
              />
              <div className='about'>
                <button
                  type='button'
                  onClick={evt => {
                    evt.preventDefault()
                    this.props.makeEntry(this.state)
                    this.props.getEntryList()
                    this.props.history.push('/')
                  }}
                >
                  Save
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
)(Save)
