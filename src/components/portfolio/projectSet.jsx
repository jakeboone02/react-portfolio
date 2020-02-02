import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import Carousel, { Modal, ModalGateway } from 'react-images'
import ProjectCard from './projectCard'
// import { Project } from '../../models/project'
import TitleBox from '../titleBox'
import sampleImage from '../../img/sample.png'

// @todo Convert to TS, waiting on a fix from react-images
// https://github.com/doublejosh/react-portfolio/issues/1

// export interface ProjectSetProps {
//     id: string
//     headline: string
//     subhead: string
//     projects: Project[]
// }

// export const ProjectSet: React.FC<ProjectSetProps> = props => {
const ProjectSet = props => {
    const [modalIsOpen, setModal] = useState(false)
    const [selectedId, setSelected] = useState(0)

    const toggleModal = selectedId => {
        setModal(!modalIsOpen)
        setSelected(selectedId)
    }

    const images = []

    return (
        <Container>
            <Row id={props.id} className="text-center">
                <TitleBox headline={props.headline} subhead={props.subhead} />
            </Row>
            <Row className="mb-4 pb-4">
                {props.projects &&
                    props.projects.map((p, i) => {
                        const imagePath = p.image
                            ? 'img/' + p.image
                            : sampleImage
                        images.push({ source: imagePath })

                        return (
                            <div
                                key={p.id}
                                className="col-xl-4 col-md-6 mb-4"
                                onClick={() => toggleModal(i)}
                            >
                                <ProjectCard {...p} project={p.id} />
                            </div>
                        )
                    })}
            </Row>
            <ModalGateway>
                {modalIsOpen ? (
                    <Modal onClose={toggleModal}>
                        <Carousel views={images} currentIndex={selectedId} />
                    </Modal>
                ) : null}
            </ModalGateway>
        </Container>
    )
}

export default ProjectSet
