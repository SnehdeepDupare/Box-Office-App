import { FlexGrid } from '../common/FlexGrid';
import ActorCard from './ActorCard';

const ActorsGrid = ({ actors }) => {
  return (
    <FlexGrid>
      {actors.map(data => (
        <ActorCard
          key={data.person.id}
          name={data.person.name}
          image={
            data.person.image ? data.person.image.medium : '/img-not-found.png'
          }
          country={data.person.country ? data.person.country.name : null}
          birthday={data.person.birthday}
          deathday={data.person.deathday}
          gender={data.person.gender}
        />
      ))}
    </FlexGrid>
  );
};

export default ActorsGrid;
