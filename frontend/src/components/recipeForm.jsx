import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createrecipe } from '../features/goals/goalSlice'


function GoalForm() {
  const [text, setText] = useState('')

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createrecipe({ text }))
    setText('')
  }

  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='ingrediants'>Ingredients</label>
          <input
            type='text'
            name='ingrediants'
            size="sm"
            id='ig'
            value={text}
            onChange={(f) => setText(f.target.value)}
          />
         
        
          
        </div>
        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            Add Recipe
          </button>
        </div>
      </form>
    </section>
  )
}

export default GoalForm