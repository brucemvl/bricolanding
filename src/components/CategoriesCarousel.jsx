import { useEffect, useState } from 'react'
 import categories from '../datas'
  import '../styles/CategoryCarousel.scss'

   export default function CategoriesCarousel() {
     const [index, setIndex] = useState(0)
      const [visible, setVisible] = useState(true)

       useEffect(() => { const interval = setInterval(() => { setVisible(false) 
        setTimeout(() => { setIndex((prev) => (prev + 1) % categories.length)
           setVisible(true) }, 400) }, 2500)
            return () => clearInterval(interval) }, [])
              const current = categories[index]

               return ( <div className="category-wrapper">
                 <div className={`category-card ${visible ? 'show' : 'hide'}`}>
                     <img src={current.icon} alt={current.name} className="category-icon" />
                      <h3 className="category-name">{current.name.toLocaleUpperCase()}</h3>
                       </div> 
                       </div> ) }