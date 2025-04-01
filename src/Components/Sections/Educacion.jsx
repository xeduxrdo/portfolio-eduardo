import '../../Styles/Educacion.css';
import { FaCircleCheck } from 'react-icons/fa6';

function Educacion() {
  const certifications = [
    {
      id: 1,
      institution: 'freeCodeCamp',
      curso: 'Responsive Web Design',
      certification:
        'https://www.freecodecamp.org/certification/Edward97/responsive-web-design',
      year: '2022',
      details: 'HTML y CSS, Accesibilidad, Tamaños de pantalla',
    },
    {
      id: 2,
      institution: 'freeCodeCamp',
      curso: 'JavaScript Algorithms and Data Structures',
      certification:
        'https://www.freecodecamp.org/certification/Edward97/javascript-algorithms-and-data-structures',
      year: '2023',
      details: 'Fundamentos de JavaScript, Sintaxis, DOM',
    },
  ];

  return (
    <div
      id='educacion'
      className='section-educacion'>
      <div className='container-educacion'>
        {/* Contenedor de texto */}
        <div className='text-container-education'>
          <h1 className='title-educacion'>Educación</h1>
          <p className='description-educacion'>
            Aquí encontrarás mi formación académica y como autodidacta.
          </p>
        </div>
        {/* Contenedor de tecnologias */}
        <div className='edu-container'>
          {/* Contenedor de universidad */}
          <div className='uni-info'>
            <p>
              <span className='bold'>Institución:</span> Universidad Politécnica
              de Victoria
            </p>
            <p>
              <span className='bold'>Grado:</span> Ingeniería en Tecnologías de
              la Información
            </p>
            <p>
              <span className='bold'>Año:</span> 2015 - 2020
            </p>
            {/* Contenedor de checs */}
            <div className='check'>
              <div className='check-card'>
                <p>Carrera concluida</p>
                <FaCircleCheck className='fa-circle-check' />
              </div>

              <div className='check-card'>
                <p>Titulado</p>
                <FaCircleCheck className='fa-circle-check' />
              </div>

              <div className='check-card'>
                <p>Cédula Profesional</p>
                <FaCircleCheck className='fa-circle-check' />
              </div>
            </div>
          </div>

          {/* Contenedor de certificaciones */}
          <div className='certifications'>
            {certifications.map(
              ({ id, institution, curso, certification, year, details }) => (
                <div
                  className='cert-card'
                  key={id}>
                  <p>
                    <span className='bold'>Institución / Plataforma:</span>{' '}
                    {institution}
                  </p>
                  <p>
                    <span className='bold'>Curso:</span> {curso}
                  </p>
                  <p>
                    <span className='bold'>Certificación:</span>{' '}
                    <a
                      className='certification-link'
                      href={certification}
                      target='_blank'
                      rel='noopener noreferrer'>
                      Ver certificación
                    </a>{' '}
                  </p>
                  <p>
                    <span className='bold'>Año:</span> {year}
                  </p>

                  {/* Contenedor de detalles */}
                  <div className='cert-details'>
                    {details.split(',').map((detail, index) => (
                      <div
                        className='details-card'
                        key={index}>
                        <p>{detail.trim()}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Educacion;
