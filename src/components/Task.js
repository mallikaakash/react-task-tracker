import {FaTimes} from 'react-icons/fa'

const Task= ({task})=>{
    return (
        <div className='task'>
            <h3>{task.text}<FaTimes /></h3>
            <p>{task.day}</p>
        </div>
    )
}

// const taskStyle={
//     backgroundColor: '#3a1e1e'
//   }
  

export default Task