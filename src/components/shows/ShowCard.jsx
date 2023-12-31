import { styled } from 'styled-components';
import { SearchCard, SearchImgWrapper } from '../common/SearchCard';
import { StarIcon } from '../common/StarIcon';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const ShowCard = ({ name, image, id, summary, onStarMeClick, isStarred }) => {
  const summaryStripped = summary
    ? summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '') + '...'
    : 'No Description';

  const starBtnRef = useRef();
  const handleStarClick = e => {
    e.preventDefault();
    onStarMeClick(id);
    const starBtnEl = starBtnRef.current;

    if (!starBtnEl) return;

    if (isStarred) {
      starBtnEl.classList.remove('animate');
    } else {
      starBtnEl.classList.add('animate');
    }
  };

  return (
    <SearchCard>
      <Link to={`/show/${id}`} target="_blank" rel="noreferrer">
        <SearchImgWrapper>
          <img src={image} alt={name} />
        </SearchImgWrapper>

        <h1>{name}</h1>

        <p>{summaryStripped}</p>

        <ActionSection>
          <p>Read More...</p>
          <StarBtn ref={starBtnRef} type="button" onClick={handleStarClick}>
            <StarIcon active={isStarred} />
          </StarBtn>
        </ActionSection>
      </Link>
    </SearchCard>
  );
};

export default ShowCard;

const ActionSection = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    text-decoration-color: #fff;
    color: #fff;
    &:hover {
      text-decoration-color: ${({ theme }) => theme.mainColors.hotred};
      color: ${({ theme }) => theme.mainColors.hotred};
    }
  }
`;

const StarBtn = styled.button`
  outline: none;
  border: 1px solid #8e8e8e;
  border-radius: 15px;
  padding: 5px 20px;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
    ${StarIcon} {
      background-color: #ffc806;
    }
  }
  &.animate {
    ${StarIcon} {
      animation: increase 0.75s ease-in forwards;
      @keyframes increase {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(3) rotate(90deg);
        }
        100% {
          transform: scale(1);
        }
      }
    }
  }
`;
