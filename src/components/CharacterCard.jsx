import { BsDot } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';

export const CharacterCard = ({ character }) => {
  const { image, name, species, lastSeen, status, firstSeen } = character;
  return (
    <div className='flex h-60 w-[530px] bg-slate-800 text-slate-100 rounded-lg m-4 overflow-hidden shadow-md'>
      <div className='w-[40%] '>
        <img src={image} alt='' className='object-cover h-full w-full' />
      </div>
      <div className='ml-6 mt-3'>
        <h2 className='text-2xl font-black'>{name}</h2>
        <h3 className='text-lg flex items-center mb-4'>
          <GoPrimitiveDot
            className={
              status == 'Alive'
                ? 'text-green-600'
                : status == 'Dead'
                ? 'text-red-600'
                : 'text-gray-200'
            }
          />
          <span className='pl-1'>
            {status} - {species}
          </span>
        </h3>
        <p className='text-slate-400'>Last kwown location:</p>
        <p>{lastSeen}</p>
        <p className='text-slate-400 mt-3'>First seen in:</p>
        <p>{firstSeen}</p>
      </div>
    </div>
  );
};
