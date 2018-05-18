import { connect } from 'react-redux'
import <%= name %> from './<%= name %>'

const loadPageData = () => {return}

export default connect(
  state => ({
    containerName: '<%= name %>',
  }),
  {
    loadPageData
  }
)(<%= name %>)
