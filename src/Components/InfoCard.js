import React from 'react';
import { Card, CardBody, CardTitle, CardHeader, CardSubtitle, CardLink } from 'reactstrap';

const InfoCard = (props) => {
    return (
        <Card>
            <CardHeader>{this.props.data.trackName}</CardHeader>
            <CardBody>
                <CardTitle>{this.props.data.artistName}</CardTitle>
                <CardSubtitle>{this.props.data.collectionName}</CardSubtitle>
            </CardBody>
            <img src={this.props.data.artworkUrl100} alt={this.props.data.collectionViewUrl}></img>
            <CardBody>
                <CardLink href={this.props.data.trackViewUrl}>Check out the song on iTunes!</CardLink>
            </CardBody>
        </Card>
    );
}

export default InfoCard;