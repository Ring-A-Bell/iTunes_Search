import React from 'react';
import { Card, CardBody, CardTitle, CardHeader, CardSubtitle, CardLink } from 'reactstrap';

const InfoCard = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-5 offset-4 text-center">
                    
                {/*<Palette image={props.data.artworkUrl100}>
                {palette => ( */}
                    <Card>
                        <CardHeader style={{backgroundColor:"gray", color: "white"}}>{props.data.trackName}</CardHeader>
                        <CardBody>
                            <CardTitle>{props.data.artistName}</CardTitle>
                            <CardSubtitle>{props.data.collectionName}</CardSubtitle>
                        </CardBody>
                        <div className="text-center">
                            <img className="text-center" width="50%" src={props.data.artworkUrl100} alt={props.data.collectionViewUrl}></img>
                        </div>
                        <CardBody>
                            <audio controls name="media" src={props.data.previewUrl} type="audio/x-m4a"></audio><br></br>
                            <CardLink href={props.data.trackViewUrl}>Check out the full song on iTunes!</CardLink>
                        </CardBody>
                    </Card>
                    
                {/*})}
                </Palette> */}
                    <br></br>
                </div>
            </div>
        </div>
    );
}

export default InfoCard;