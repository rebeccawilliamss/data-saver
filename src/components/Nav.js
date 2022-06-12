import './Nav.css';

function Nav() {
    return (
        <>
        <Nav className='justify-content-end' defaultActiveKey="/home" as="ul">
          <Nav.Item as="li">
            <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-2">Link</Nav.Link>
       </Nav.Item>
       </Nav>
       </>
    )
}

export default Nav();