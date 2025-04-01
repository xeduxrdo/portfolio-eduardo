import '../../Styles/Habilidades.css';
import html from '../../assets/skills/html.png';
import css from '../../assets/skills/css.png';
import javascript from '../../assets/skills/javascript.png';
import react from '../../assets/skills/react.png';
import nodejs from '../../assets/skills/nodejs.png';
import github from '../../assets/skills/github.png';
import vscode from '../../assets/skills/vscode.png';
import figma from '../../assets/skills/figma.png';
import affinityphoto from '../../assets/skills/affinityphoto.png';

function Habilidades() {
  const techs = [
    { id: 1, src: html, title: 'HTML', style: 'html-style' },
    { id: 2, src: css, title: 'CSS', style: 'css-style' },
    { id: 3, src: javascript, title: 'JavaScript', style: 'javascript-style' },
    { id: 4, src: react, title: 'React', style: 'react-style' },
    { id: 5, src: nodejs, title: 'NodeJS', style: 'nodejs-style' },
    { id: 6, src: github, title: 'GitHub', style: 'github-style' },
    { id: 7, src: vscode, title: 'VScode', style: 'vscode-style' },
    { id: 8, src: figma, title: 'Figma', style: 'figma-style' },
    {
      id: 9,
      src: affinityphoto,
      title: 'Affinity Photo',
      style: 'affinityphoto-style',
    },
  ];
  return (
    <div
      id='habilidades'
      className='section-habilidades'>
      <div className='container-habilidades'>
        {/* Contenedor de texto */}
        <div className='text-container'>
          <h1 className='title-habilidades'>Habilidades</h1>
          <p className='description-habilidades'>
            Estas son las tecnologías con las que he trabajado.
          </p>
        </div>
        {/* Contenedor de tecnologias */}
        <div className='tech-container'>
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`tech-card ${style}`}>
              <img
                src={src}
                alt={`Logo de ${title}`}
                className='img'
              />
              <p>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Habilidades;
