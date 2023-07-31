import React from 'react';

const DetailInfo = (props) => {
  const { movie, info, flexrow = true } = props;

  const wordFormatter = (obj, objProp, arrData, objInArrProp, i) => {
    if (i === obj[objProp].length-1) {
      return `${arrData[objInArrProp]}.`;
    }
    return `${arrData[objInArrProp]}, `;
  };

  const currencyFormatter = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"});

  const movieDetail = {
    "genres": {
      text: "Genres",
      generateInfo: movie.genres?.map((genre, i) => wordFormatter(movie, "genres", genre, "name", i))
    },
    "spoken_languages": {
      text: "Languages",
      generateInfo: movie["spoken_languages"]?.map((language, i) => wordFormatter(movie, "spoken_languages", language, "english_name", i))
    },
    "release_date": {
      text: "Release Date",
      generateInfo: movie["release_date"]
    },
    "vote_average": {
      text: "Rating",
      generateInfo: movie["vote_average"]
    },
    "runtime": {
      text: "Duration",
      generateInfo: `${movie.runtime} minutes`
    },
    "budget": {
      text: "Budget",
      generateInfo: currencyFormatter.format(movie.budget)
    },
    "revenue": {
      text: "Revenue",
      generateInfo: currencyFormatter.format(movie.revenue)
    },
    "production_companies": {
      text: "Production Company(es)",
      generateInfo: movie["production_companies"]?.map((company, i) => wordFormatter(movie, "production_companies", company, "name", i))
    },
    "overview": {
      text: "Overview",
      generateInfo: movie.overview
    }
  };

  return (
    <>
      {flexrow ?
        <div className='flex gap-2 text-sm md:text-base'>
          <p className='font-semibold'>{movieDetail[info].text}:</p>
          <p className='opacity-80'>{movieDetail[info].generateInfo}</p>
        </div>
        :
        <div className='flex flex-col gap-0 text-sm md:text-base lg:max-h-36'>
          <p className='font-semibold'>{movieDetail[info].text}:</p>
          <p className='h-full opacity-80 overflow-auto'>{movieDetail[info].generateInfo}</p>
        </div>
      }
    </>
  )
};

export default DetailInfo;