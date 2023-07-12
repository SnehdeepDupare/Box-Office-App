import { SearchCard, SearchImgWrapper } from '../common/SearchCard';

const ActorCard = ({ image, name, country, birthday, deathday, gender }) => {
  return (
    <SearchCard>
      <SearchImgWrapper>
        <img src={image} alt={name} />
      </SearchImgWrapper>

      <h1>
        {name} {!!gender && `(${gender})`}
      </h1>

      <p>{country ? `Comes from ${country}` : 'No country known'}</p>

      {!!birthday && <p>{birthday}</p>}
      <p>{deathday ? `Died: ${deathday}` : 'Alive'}</p>
    </SearchCard>
  );
};

export default ActorCard;
