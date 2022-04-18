import PropTypes from 'prop-types'


 
const Header = ({title,word}) => {
  return (
    <header>
      <h1 style={{color:"red", backgroundColor:"black"}}>
        {title}</h1>
        <h1 style={headingStyle}>
        {word}</h1>
    </header>
  )
}
Header.defaultProps = {
title: "Task Treaker"
};
Header.defaultProps = {
  word: "hej"
  };
Header.propTypes = {
  title : PropTypes.string.isRequired,
};

const headingStyle={
  color:"black", backgroundColor:"red"

}

 

export default Header
