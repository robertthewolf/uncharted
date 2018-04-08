import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'

import reset from 'reset-css'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Uncharted | A New Way Of Travelling" />
    <Navbar />
    <main>{children()}</main>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
