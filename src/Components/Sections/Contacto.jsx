import { useState } from 'react';
import '../../Styles/Contacto.css';
import { BsClipboard2, BsClipboard2Check } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaCodepen } from 'react-icons/fa';
import { SiIndeed } from 'react-icons/si';

function Contacto() {
  const [copied, setCopied] = useState(false);
  const textToCopy = 'jeduardogr.97@gmail.com';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id='contacto'
      className='section-contacto'>
      <div className='container-contacto'>
        <div className='form-group-contacto'>
          <div className='copy-clipboard-container-contacto'>
            <input
              type='text'
              value={copied ? 'Copiado! 🎉' : textToCopy}
              readOnly
              className='input-field-contacto'
            />
            <button
              onClick={copyToClipboard}
              className='copy-button-contacto'>
              {copied ? (
                <BsClipboard2Check size={25} />
              ) : (
                <BsClipboard2 size={25} />
              )}
            </button>
          </div>
        </div>

        <div className='links-contacto'>
          <a
            href='https://github.com/xeduxrdo'
            target='_blank'
            rel='noopener noreferrer'
            className='link-card'>
            <FaGithub size={30} />
            Github
          </a>
          <a
            href='https://codepen.io/xeduxrdo97/'
            target='_blank'
            rel='noopener noreferrer'
            className='link-card'>
            <FaCodepen size={30} />
            CodePen
          </a>
          <a
            href='https://codepen.io/xeduxrdo97/'
            target='_blank'
            rel='noopener noreferrer'
            className='link-card'>
            <SiIndeed size={30} />
            Indeed
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
