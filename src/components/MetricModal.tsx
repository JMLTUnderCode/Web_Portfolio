import { IoClose } from 'react-icons/io5';
// Uso de la animación de carga proviniente de LDRS.
import { Trefoil } from 'ldrs/react';
import 'ldrs/react/Trefoil.css';

interface MetricModalProps {
  modalUrl: string;
  imgLoaded: boolean;
  handleCloseModal: () => void;
  setImgLoaded: (loaded: boolean) => void;
}

export function MetricModal({ modalUrl, imgLoaded, handleCloseModal, setImgLoaded }: MetricModalProps) {
  return (
    <div className="metric-modal" onClick={e => e.stopPropagation()}>
      <button className="metric-modal-close" onClick={handleCloseModal}>
        <IoClose size={20} />
      </button>
      {!imgLoaded && (
        <div className="metric-modal-loader">
          <Trefoil
            size="50"
            stroke="5"
            strokeLength="0.15"
            bgOpacity="0.1"
            speed="1.4"
            color="var(--vegas-gold)"
          />
        </div>
      )}
      <img
        className={`metric-modal-img${imgLoaded ? ' show' : ''}`}
        src={modalUrl}
        alt="Metric Modal"
        style={{ display: imgLoaded ? 'block' : 'none' }}
        onLoad={() => setImgLoaded(true)}
      />
    </div>
  );
};