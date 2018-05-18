import React from 'react'
import PropTypes from 'prop-types'

import css from './<%= name %>.css'

const <%= name %> = props => {
  return (
    <div className={css.component}>
      {/**/}
    </div>
  )
}

<%= name %>.propTypes = {
  // id: PropTypes.number.isRequired,
}

export default <%= name %>
