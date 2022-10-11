import '../stylesheets/Logo.css';
import freeCodeCampLogo from '../pictures/FreeCodeCamp_logo.svg'

function Logo() {
  return (
    <div className="Logo">
      <div className='freecodecamp-logo-contenedor'>
        <img 
          className='freecodecamp-logo'
          src={ freeCodeCampLogo }
          alt='Logo de freeCodeCamp'/>
      </div>
    </div>
  );
}

export default Logo;
