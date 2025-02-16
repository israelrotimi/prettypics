import React from 'react'

const CategoryTabs = () => {
    const categories = ["Home", "Videos", "Leaderboard", "Challenges"]
  return (
    <div className="my-8 mx-2 flex gap-4 items-center justify-center">
        {categories.map((category, index) => (
            <a 
              className={index === 0 ? "text-white bg-black rounded-full p-4" : ""}
              key={index} href={`/${category}`} >{category}</a>
        ))}
    </div>
  )
}

export default CategoryTabs