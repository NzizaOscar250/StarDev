import { FiSend } from 'react-icons/fi';

const Button = ({name,bgcolor,actions}) => {
  return (
    <button className={`px-2 py-1 ${bgcolor}`} onClick={actions}>{name} <FiSend/> </button>
  )
}

export default Button