import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import GoalForm from '../components/recipeForm'
import GoalItem from '../components/GoalItem'
import Spinner from '../components/Spinner'
import { getrecipe, reset } from '../features/goals/goalSlice'
import './dashboard.css';
import SwipeableTextMobileStepper from './carousal'




function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { recipes, isLoading, isError, message } = useSelector(
    (state) => state.recipes
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getrecipe())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
    
    <div className='mainpage' >
    <div className='carousal div1' ><SwipeableTextMobileStepper/><SwipeableTextMobileStepper/><SwipeableTextMobileStepper/><SwipeableTextMobileStepper/></div>
    
    <div className='div1 pd' ><section className='heading'>
        <h1>Happy Cooking {user && user.name} !</h1>
        <p>Your Recipes</p>
      </section>
      <GoalForm />

      <section className='content'>
        {recipes.length > 0 ? (
          <div className='recipe'>
            {recipes.map((recipe) => (
              <GoalItem key={recipe._id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <h3>No existing Recipes</h3>
        )}
      </section></div>
      </div>
    </>
  )
}

export default Dashboard