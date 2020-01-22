import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import ProjectList from './projectList'

const Portfolio = props => {
    return (
        <section id="work" className="portfolio-mf sect-pt4 route">
            <div className="container">
                {props.sections.map(section => (
                    <ProjectList {...section} />
                ))}
            </div>
        </section>
    )
}

const mapStateToProps = state => {
    return {
        sections: state.portfolio.sections,
    }
}

export default compose(connect(mapStateToProps))(Portfolio)