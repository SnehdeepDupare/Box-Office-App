import { styled } from 'styled-components';
import { SearchCard, SearchImgWrapper } from '../common/SearchCard';

const ActorCard = ({ image, name, country, birthday, deathday, gender }) => {
  return (
    <SearchCard>
      <ActorImgWrapper>
        <img src={image} alt={name} />
      </ActorImgWrapper>

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

const ActorImgWrapper = styled(SearchImgWrapper)`
  img:hover {
    scale: 1;
  }
`;
