import { Col } from "react-bootstrap";

const MyAlbumCard =  ({ singleSong }) => {
    return (
      <Col class="text-center">
          <img class="img-fluid" src={singleSong.album.cover_medium} alt="track" />
        <p>
            Track: "{`${singleSong.title}`}" <br/>
            Artist: {singleSong.artist.name}
        </p>
      </Col>
    );
  }

export default MyAlbumCard