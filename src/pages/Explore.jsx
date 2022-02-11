import { Link } from 'react-router-dom'
import rentCategoryImage from '../assets/jpg/rentCategoryImage.jpg'
import sellCategoryImage from '../assets/jpg/sellCategoryImage.jpg'

function Explore() {
  return (
    <div className='explore'>
      <header>
        <p className="PageHeader">Explore</p>
      </header>
      <main>
        <p className="exploreCategoryHeading">
          Categories
        </p>
        <div className="exploreCategories">
          <Link to='/category/rent'>
            <img
              src={rentCategoryImage}
              alt="rent"
              className='exploreCategoryImg'
            />
            <p className="exploreCategoryName">Place for rent</p>
          </Link>
          <Link to='/category/rent'>
            <img
              src={sellCategoryImage}
              alt="rent"
              className='exploreCategoryImg'
            />
            <p className="exploreCategoryName">Places for sell</p>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Explore