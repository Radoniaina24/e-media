import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/counter.css";

type LightboxImageProps = {
  lightboxIndex: number;
  setLightboxIndex: (index: number) => void;
  images: { src: string }[];
};

const LightboxImage: React.FC<LightboxImageProps> = ({
  lightboxIndex,
  setLightboxIndex,
  images,
}) => {
  return (
    <section className="lightBox">
      <Lightbox
        plugins={[Counter, Fullscreen, Zoom, Thumbnails]}
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        slides={images}
      />
    </section>
  );
};

export default LightboxImage;
