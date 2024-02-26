import { FiSend } from 'react-icons/fi';

const Button = ({name,bgcolor,actions}) => {
  return (
    <button className={`p-2 ${bgcolor}`} onClick={actions}>{name} <FiSend style={{fontSize:20,fontWeight:'bold'}}/> </button>
  )
}

export default Button