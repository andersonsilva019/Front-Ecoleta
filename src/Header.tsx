import React from 'react';

interface HeaderProps {
  /* title?: string,  Propriedade não obrigatória */
  title: string,  /* Propriedade obrigatória */

}

const Header: React.FC<HeaderProps> = ( props ) => {
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  );
}

export default Header;