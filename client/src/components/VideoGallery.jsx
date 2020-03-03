import React from 'react';
import { Card, CardDeck, Container } from 'react-bootstrap';

class VideoGallery extends React.Component {
    render() {
        return (
            <Container-fluid>
                <h2 id="video-gallery-header">Meet the Latest Releases</h2>
                <CardDeck>
                    <Card>
                        <iframe height="315" src="https://www.youtube-nocookie.com/embed/o3IQ1JrXnV8/?vq=hd1080" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <Card.Body>
                            <Card.Title>Surface Laptop 3 <span class="badge badge-pill badge-success"><p>NEW</p></span></Card.Title>
                            <Card.Text>
                                Make a more powerful statement with new Surface Laptop 3. Sleek and light, it travels with ease and delivers improved speed and performance, all-day battery life, and outstanding graphics. Now in two sizes and two elegant keyboard finishes. Fuel your ideas with Surface Laptop 3.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <iframe height="315" src="https://www.youtube-nocookie.com/embed/v5SFBpMiaiQ/?vq=hd1080" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <Card.Body>
                            <Card.Title>Surface Pro X <span class="badge badge-pill badge-success"><p>NEW</p></span></Card.Title>
                            <Card.Text>
                                You’re always one step ahead. So is the new Surface Pro X. Sleek design and ultimate mobility combine with razor-thin bezels that take your ideas to the edge of the brilliant 13” touchscreen. Work more efficiently anywhere with blazing-fast LTE. For a premium laptop experience on the go, click the Surface Pro X Signature Keyboard in place. The Slim Pen stores securely and recharges in the keyboard, so it’s always at your fingertips. Stand out and stay connected with Surface Pro X.
                        content.{' '}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 33 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <iframe height="315" src="https://www.youtube-nocookie.com/embed/V4Hwi3o2X0E/?vq=hd1080" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <Card.Body>
                            <Card.Title>Surface Pro 7 <span class="badge badge-pill badge-success"> <p>NEW</p></span></Card.Title>
                            <Card.Text>
                                At the office, at home or en route, new Surface Pro 7 adapts to the way you work with laptop-to-tablet versatility. And now, it delivers more power than ever, with a laptop-class Intel® Core™ processor, all-day battery, and improved graphics — plus more multitasking connections, including both USB-C™ and USB-A ports. More power from the Pro you know. Surface Pro 7.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 1 hr ago</small>
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </Container-fluid>
        );
    }
}
export default VideoGallery;