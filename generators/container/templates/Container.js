import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import css from './<%= name %>.css'

class <%= name %> extends Component {
  constructor(props) {
    super(props)
  }

  componentWillReceiveProps() {
    this.props.loadPageData()
  }

  render() {
    const { containerName } = this.props

    return (
      <main>
        <Helmet title="<%= name %>" />

        {/**/}
      </main>
    )
  }
}

<%= name %>.propTypes = {
  loadPageData: PropTypes.func.isRequired,
  containerName: PropTypes.string.isRequired,
}

export default <%= name %>
