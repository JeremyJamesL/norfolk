import { useState, useCallback } from "react";
import { Photos } from "../components/Photos"
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import PageStyles from './Page.module.css';
import background from "../assets/img/sauna.jpeg";

function PhotoGallery() {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
    };

  return (
    <div>
       <div className={`${PageStyles.hero} mb-3`} style={{backgroundImage: `url(${background})`}}>
        <div className="row" style={{textAlign: "left"}}>
          <h1 className={PageStyles.title}>Photo gallery</h1>
        </div>  
      </div>
      <main className={PageStyles.main}>
      <div className="row">
      <Gallery photos={Photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={Photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
      </div>
      </main>
    </div>
  )
}
export default PhotoGallery