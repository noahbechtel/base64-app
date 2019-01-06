import React, { Component } from 'react'

export default class Form extends Component {
  constructor () {
    super()
    this.state = {
      text: ''
    }
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
      <div>
        <form
          onSubmit={evt => {
            evt.preventDefault()
            this.props.handleSubmit(evt)
          }}
        >
          <fieldset>
            <div>
              <h3>Convert: </h3>
              <input
                type='text'
                onChange={evt => {
                  this.setState({
                    text: evt.target.value
                  })
                }}
                value={this.state.text}
              />
              <h3>Output:</h3>
              <input
                type='text'
                name='result'
                value={
                  this.isBase64(this.state.text)
                    ? atob(this.state.text)
                    : btoa(this.state.text)
                }
              />
              <button type='Submit'>Remember</button>
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}
