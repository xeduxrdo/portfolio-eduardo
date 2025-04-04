import { useState } from 'react';
import '../../Styles/Inicio.css';
// import codingnobg from '../../assets/codingnobg.png';
// import meart from '../../assets/meart.png';
import meart2 from '../../assets/meart2.jpg';
import { BsClipboard2, BsClipboard2Check } from 'react-icons/bs';
import { CgFileDocument } from 'react-icons/cg';

function Inicio() {
  const [copied, setCopied] = useState(false);
  const textToCopy = 'jeduardogr.97@gmail.com';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id='inicio'
      className='section-inicio'>
      <div className='main-container'>
        {/* Contenedor texto y botones */}
        <div className='text-btn-container'>
          <h1 className='title-inicio'>
            <span className='no-bold'>Hola👋, soy</span> Eduardo
          </h1>
          <div className='type-container'>
            <p className='subtitle-inicio'>Frontend Developer</p>
          </div>

          <p className='description-inicio'>
            Me fascina el diseño web y la creación de interfaces. Disfruto
            convertir conceptos en experiencias visuales que sean tanto
            atractivas como intuitivas.
          </p>

          {/* Contenedor botones */}
          <div className='form-group'>
            <div className='copy-clipboard-container'>
              <input
                type='text'
                value={copied ? 'Copiado! 🎉' : textToCopy}
                readOnly
                className='input-field'
              />
              <button
                onClick={copyToClipboard}
                className='copy-button'
                title='Copiar a portapapeles'>
                {copied ? (
                  <BsClipboard2Check size={25} />
                ) : (
                  <BsClipboard2 size={25} />
                )}
              </button>
            </div>

            <button className='btn-cv'>
              <a
                href={`${import.meta.env.BASE_URL}/cv-eduardogarcia.pdf`}
                target='_blank'
                rel='noopener noreferrer'>
                Ver CV
              </a>
              <CgFileDocument
                className='icon'
                size={25}
              />
            </button>
          </div>
        </div>
        {/* Contenedor imagen */}
        <div>
          <img
            src={meart2}
            alt='me in anime version'
            className='img-coding'
          />
        </div>
      </div>
    </div>
  );
}

export default Inicio;
