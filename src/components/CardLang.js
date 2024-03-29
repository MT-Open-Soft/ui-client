import React from 'react'
function CardLang(movie) {
  return (
     <div className='col-lg-2 col-md-4 col-sm-6'>
        <div className='movie-card'>
            <img src={movie.poster} alt="Preview Image" className='img-fluid' />
           <p>{movie.runtimeInMinutes} | {movie.type}
           </p>
           <div className='content'>
            <h4>{movie.title}</h4>
            <div className='card-icons'>
               <ion-icon name="add-outline"></ion-icon> 
               <ion-icon name="play-outline"></ion-icon> 
            </div>
           </div>
           </div>
     </div>
  )
}

export default CardLang;