import React, { useState } from 'react';
import { useOutsideClick } from 'infrastructure/view/hooks';
import { ContextMenuOption } from '../../../components/atoms';
import { notifySuccess } from 'utils/toastify';
import { reviewServices } from 'application';
import { reviewDelete } from 'infrastructure/view/store/review/review.actions';
import { useReview } from 'infrastructure/view/hooks/UseReviews';
import { useHistory } from 'react-router-dom';

function CardMenu({ id }) {
  const review = useReview();
  const history = useHistory();
  const [position, setPosition] = useState({ xPos: 0, yPos: 0 });
  const [showMenu, setShowMenu] = useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  const positionMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setPosition({ xPos: e.pageX - 130, yPos: e.pageY + 10 });
  };
  const handleClickDelete = async id => {
    if (window.confirm('Êtes-vous sur ?')) deleteData(id);
  };

  const deleteData = async id => {
    await reviewServices
      .deleteReview(id)
      .then(() => review.dispatch(reviewDelete(id)));
    notifySuccess('La review est supprimée');
    setShowMenu(false);
  };

  const updateData = async id => {
    history.push(`/reviews/modifier/${id}`);
  };

  const goToAddReviewWithId = id => {
    history.push(`/reviews/ajouter/${id}`);
  };

  useOutsideClick(ref, () => {
    if (showMenu) setShowMenu(false);
  });

  return (
    <>
      <img
        src="/menu.png"
        alt="card menu"
        className="card__header__menu"
        onClick={e => {
          positionMenu(e);
          e.stopPropagation();
          setShowMenu(true);
        }}
      />

      {showMenu && (
        <div
          ref={ref}
          className="custom-context-menu"
          style={{ top: position.yPos, left: position.xPos }}
        >
          <ContextMenuOption
            name="Modifier"
            onClick={e => {
              e.stopPropagation();
              updateData(id);
            }}
          />
          {
            <ContextMenuOption
              name="Dupliquer"
              onClick={e => {
                e.stopPropagation();
                goToAddReviewWithId(id);
              }}
            />
          }
          <ContextMenuOption
            name="Supprimer"
            onClick={e => {
              e.stopPropagation();
              handleClickDelete(id);
            }}
          />
        </div>
      )}
    </>
  );
}

export default CardMenu;
