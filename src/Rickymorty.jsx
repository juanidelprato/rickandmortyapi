import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import Logo from './assets/Rick-and-Morty.png';
import { CharacterCard } from './components/CharacterCard';
import { getApi } from './hooks/useFetch';

export const Rickymorty = () => {
  const [page, setPage] = useState(1);
  const [character, setCharacter] = useState([]);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    getApi(page).then((characters) => setCharacter(characters));
  }, [page]);

  useEffect(() => {
    console.log(params.page);
    if (params.page) {
      setPage(parseInt(params.page));
    } else {
      return;
    }
  }, [window.history.state]);

  const handleNext = () => {
    setPage(page + 1);
    navigate(`/pages/${page + 1}`);
    scroll.scrollToTop();
  };
  const handlePrev = () => {
    if (page >= 1) {
      setPage(page - 1);
      navigate(`/pages/${page - 1}`);
      scroll.scrollToTop();
    }
    return;
  };
  return (
    <div className='w-full'>
      <div className='flex justify-center items-center '>
        <img src={Logo} alt='' className='logo' />
      </div>

      <div className='p-4 flex flex-wrap justify-center'>
        {character.map((ch) => (
          <CharacterCard character={ch} key={ch.id} />
        ))}
      </div>
      <div className='flex justify-center items-center pb-8'>
        <button
          onClick={handlePrev}
          className={
            page == 1
              ? 'btn rounded rounded-r-none cursor-not-allowed hover:bg-inherit '
              : 'btn rounded rounded-r-none'
          }
          disabled={page === 1 ? true : false}
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className='btn rounded rounded-l-none border-l-2 border-l-gray-400'
        >
          Next
        </button>
        <h4 className='ml-4 text-slate-200'>Page {page}</h4>
      </div>
    </div>
  );
};
