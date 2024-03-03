import { useDispatch } from 'react-redux'
import { deleterecipe } from '../features/goals/goalSlice'

function GoalItem({ recipe }) {
  const dispatch = useDispatch()

  return (
    <div className='goal'>
      <div>{new Date(recipe.createdAt).toLocaleString('en-US')}</div>
      <h2>{recipe.text}</h2>
      <button onClick={() => dispatch(deleterecipe(recipe._id))} className='close'>
        X
      </button>
    </div>
  )
}

export default GoalItem