import React from 'react';
import { Link } from 'react-scroll';
import { history } from '../../../../../../index';
// Styles
import './styles.scss';
import { Button } from '../../../../../../components/Button';

// ----------------
export const InfoBlock = () => {


  // Render
  return (
    <div className={`info-block`}>
      <div className="info-block__span">
      <span>#Віра</span> <span>#Надія</span> <span>#Любов</span>
      </div>
      <p>Trust Hope Love</p>
      <p>
      Благодійний Фонд України!
      </p>
      <Button size="lg" margin="true" marginTop onClick={() => history.push('/help')}>
        Допомогти
      </Button>
      <Link
        className="navbar__block-item"
        activeClass="navbar__block-item--active"
        to={"ourFund"}
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        isDynamic={true}
      >
        дізнатись більше
      </Link>

    </div>
  );
};
// ----------------

// Type of props
