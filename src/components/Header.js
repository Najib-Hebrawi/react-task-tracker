import PropTypes from 'prop-types'
import Button from "./Button";


 
const Header = ({title}) => {

  const onClick = ()=>{
    console.log('Click')
  }

  return (
    <header className="header">
      <h1>{title}</h1>

      <Button color='green' text='Add' onclick= {onClick}/>
    
    </header>
   
  )
}
Header.defaultProps = {
title: "Task Treaker"
};
Header.propTypes = {
  title : PropTypes.string.isRequired,
};


export default Header
