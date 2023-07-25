import React, { useEffect, useState } from 'react';
import SectionLayout from '../../components/layouts/SectionLayout';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../../scripts/data/themoviedb-source';
import SectionTitle from '../../components/elements/sectionTitle';

const DetailPage = () => {
  const {id} = useParams();

  const [movie, setMovie] = useState({});

  useEffect(() => {
    getMovieDetails(id, (data) => setMovie(data));
  }, [movie]);

  return (
    <SectionLayout
      sectionId="detail"
      gradFrom={"from-black"}
      gradTo={"to-gray-950"}
      gradVia={"via-red-800"}
      padding={"px-4 pt-16 pb-4 md:px-8 lg:px-16"}
    >
      <SectionTitle section="detail"/>
      <div>
        <h1>{movie.title}</h1>
      </div>
    </SectionLayout>
  )
};

export default DetailPage;