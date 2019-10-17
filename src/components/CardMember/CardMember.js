import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import './CardMember.css'

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            codecamp#4
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Hello everyone</h4>
          <p>
            this is a modal to self-expression in a future.
            we come too far in this project.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }



const CardMember = ({name, description}) => {

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div className={'divcard'}>
        <Card className={'cardconfig'}>
            <Card.Img variant="top" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAeFBMVEX///8AAACBgYH19fX6+voEBATOzs7w8PCysrJ3d3cMDAwWFha5ubmrq6s8PDxpaWlGRkYeHh7Hx8cnJyfa2tqOjo5VVVWVlZWfn58SEhJubm7U1NSFhYVeXl4uLi4pKSnj4+M1NTVLS0vo6OhgYGBXV1eUlJTAwMBDUkGNAAADp0lEQVRoge2Z19aqMBCFpXcULEFFBev7v+GBJekJScD/6vBdOuImk2mJq9XCwsLCwlycc1avL/c8v1/WduYHv1c47zeFZxF4SR6Vzg8VdnZLCSC2p/JHEuUlFip8F7QJ3fkS/kau8OUazpQIIrGfaA67ORrpVkOiI95P16h1lvHlMjGig4O2RMf1PEkjN9GwrMT/e40pKuYaE1Re5hqWdXsYaeynaHQJY6KR6scuTa2v4bQTNaxYP5AnOqtH22FNMV3ESjVFohka1kZPI5izEMvSa2PVLA3rpCWi7FLjFDr1+HGcJ2LpNMpwpoZlayzEZp6Ji1shLQBesi3YMUMjvj70lrRg57jObn8TSSRRGbjOI7tTnxbqjp9dyVXs4bzjsAvseDXIxWTUx+ogBsTsEJPpW7E+iwjjjlypOuntBH87oyw1rfGkjP5R9piICH97zZioZsmmA1FUgYFIzG4gFdxvxhhgN1dKkRq568WaXCImjlynxWVV7a59IX+hExa5c8YPsqlTvkJx8uFsAIvwZbCBSenxD7KkcHs9vpNmWIRv5gH0c6Juwf4FivBTFCHCF6gARsxNXYZx7eJzisgUNry7fITJqtMbUc/iPUJMfC1nRMvU6Vo7uIE5a3kQxYDfsSc0qSO4ywYUXqy/3hYB6y/0blwOC0Gv1NInaHpS8krZU1oH1RT9EOVdl+4azHSNpw+9SdXZilQcuOsejKK2ITRQH9DzFjXc5dApKaxbXlbChCiqwTPNEz/B1xsxDRlFeZ2lmd2iD7pzbohee3uq0hAcyC6vrikDglYLufT2Wm7XP6E8pINq8d1t6fwXG5zopLPXUP592W2L0aWBZLBHReAktnN9bhRX7JB65b8vr7p0U6H5anYwXQVClWSYJYtEZL02ZhoylTHMNboUl/hdxsvQVwOpwZHrqJ6DJJxH7gUZdM+jAuC+JKfaFlBHcK3bGfeq6+E3pM0OZiXXRQ2ARUxa9ZqhImserIXAVnR7g6wr6w0AoOkytQLvvsWHAMAh7an6pRFKvLO918PvDvcTVt//iCl/xkUn2SRvLiXS/ypOV8EgaAAulMXHP/dnkPfZT7vdPp1Lv0XGOfuunSmTM/HLWq3AzU7GPDTuuDXOCgo+aofNCa0B5aURP+BPAIzfeq5/8P9JRzjmMYP703F86XX3du4fNARuJexfsf3Lf866UgJabhV281OJHvcT5fi2ol2Hv10F5vHJqtoGWdr8kcDCwsLCf8Y/jBsveIBMCkMAAAAASUVORK5CYII=" className={'cardimg'} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                {description}
                </Card.Text>
                <ButtonToolbar className={'btnconfig'}>
                    <Button variant="primary" onClick={() => setModalShow(true)}>
                        Hi!
                    </Button>
                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </ButtonToolbar>
            </Card.Body>
        </Card>
        </div>
        
    )

}

export default CardMember

