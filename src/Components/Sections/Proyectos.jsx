import '../../Styles/Proyectos.css';
import rndquotesgenerator from '../../assets/proyects/rndquotesgenerator.png';
import todolist from '../../assets/proyects/todolist.png';
import calculator from '../../assets/proyects/calculator.png';
import pokedex from '../../assets/proyects/pokedex.png';
import html from '../../assets/skills/html.png';
import css from '../../assets/skills/css.png';
import javascript from '../../assets/skills/javascript.png';
import react from '../../assets/skills/react.png';
import { RiComputerLine } from 'react-icons/ri';
import { FaGithub } from 'react-icons/fa';

function Proyectos() {
  const projects = [
    {
      id: 1,
      src: rndquotesgenerator,
      title: 'Quotes Generator',
      style: 'html-style',
      github: 'https://github.com/xeduxrdo/rnd-quotes-generator',
      live: 'https://xeduxrdo.github.io/rnd-quotes-generator/',
      techs: [html, css, javascript],
    },
    {
      id: 2,
      src: todolist,
      title: 'TodoList',
      style: 'css-style',
      github: 'https://github.com/xeduxrdo/react-todo-list',
      live: 'https://xeduxrdo.github.io/react-todo-list/',
      techs: [html, css, react],
    },
    {
      id: 3,
      src: calculator,
      title: 'Calculator',
      style: 'javascript-style',
      github: 'https://github.com/xeduxrdo/react-calculator',
      live: 'https://xeduxrdo.github.io/react-calculator/',
      techs: [html, css, react],
    },
    {
      id: 4,
      src: pokedex,
      title: 'PokeDex',
      github: 'https://github.com/xeduxrdo/react-pokedex',
      live: 'https://xeduxrdo.github.io/react-pokedex/',
      techs: [html, css, react],
    },
  ];

  return (
    <div
      id='proyectos'
      className='section-proyectos'>
      <div className='container-proyectos'>
        {/* Contenedor de texto */}
        <div className='text-container'>
          <h1 className='title-proyectos'>Proyectos</h1>
          <p className='description-proyectos'>
            Mira algunos de mis trabajos aquí.
          </p>
        </div>
        {/* Contenedor de proyectos */}
        <div className='projects-container'>
          {projects.map((project) => (
            <div
              key={project.id}
              className='project-card'>
              <img
                src={project.src}
                alt={`Logo de ${project.title}`}
                className='project-img'
              />
              <p className='card-title-proyecto'>{project.title}</p>
              <div className='links-container'>
                <a
                  href={project.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='proyectos-links'
                  title='Código fuente en GitHub'>
                  <FaGithub size={20} />
                </a>
                {/* Contenedor de Tecnologías */}
                <div className='techs-in-projects'>
                  {project.techs.map((tech, index) => (
                    <img
                      key={index}
                      src={tech}
                      alt='Tech logo'
                      className='tech-icon-project'
                    />
                  ))}
                </div>
                <a
                  href={project.live}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='proyectos-links'
                  title='Ver el proyecto en vivo'>
                  <RiComputerLine size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Proyectos;
