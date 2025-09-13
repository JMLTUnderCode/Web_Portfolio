import ZoomInUp from '../components/animation/BackInDown';
import ZoomOutDown from '../components/animation/BackOutDown';
import { MetricModal } from './MetricModal';

interface ModalProps {
  modalUrl: string | null;
  isClosing: boolean;
  imgLoaded: boolean;
  handleCloseModal: () => void;
  setImgLoaded: (loaded: boolean) => void;
};

/*
  En este punto tenemos PropDrilling lo cual es mala practica en proyectos.
  Se debe mejorar en un futuro.
*/
export function Modal({ modalUrl, isClosing, imgLoaded, handleCloseModal, setImgLoaded }: ModalProps) {
  return(
    <>
      {modalUrl && (
        <div className="metric-modal-overlay" onClick={handleCloseModal}>
          {isClosing ? (
            <ZoomOutDown>
              <MetricModal 
                modalUrl={modalUrl}
                imgLoaded={imgLoaded}
                handleCloseModal={handleCloseModal}
                setImgLoaded={setImgLoaded} 
              />
            </ZoomOutDown>
          ) : (
            <ZoomInUp>
              <MetricModal 
                modalUrl={modalUrl}
                imgLoaded={imgLoaded}
                handleCloseModal={handleCloseModal}
                setImgLoaded={setImgLoaded} 
              />
            </ZoomInUp>
          )}
        </div>
      )}
    </>
  );
};