
// const Button = ({color,text)}) => {
//     return 
//         <button className = 'btn'>Add</button> 
// }



// export default Button

import PropTypes from 'prop-types'

function Button({color,text,onClick}) {
   
    return (
    <button 
     onClick = {onClick}
     style={{backgroundColor  : color}}
     className = 'btn'>
         {text}

    </button>
    )
}
Button.defaultProps = {
    color : 'steelblue'
}
Button.prototype = {
    text : PropTypes.string,
    color : PropTypes.string,
    onClick: PropTypes.func,

}

export default Button
