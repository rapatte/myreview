import React from 'react';
import { useState, useEffect } from 'react';
import { notifyError, notifySuccess } from 'utils/toastify';
import { reviewServices } from 'application';
import { MissionForm } from 'infrastructure/view/components';
import { Review } from 'domain/review/review';
import { Link, useHistory, useParams } from 'react-router-dom';
import { reviewUpdate } from 'infrastructure/view/store/review/review.actions';
import { useReview } from 'infrastructure/view/hooks/UseReviews';

const UpdateMissions: React.FC = () => {
  const [values, setValues] = useState<Review>({});
  const history = useHistory();
  const params: { id: string } = useParams();
  const reviewStore = useReview();

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      await reviewServices.updateReview(params.id, values);
      reviewStore.dispatch(reviewUpdate(values));
      setValues({});
      history.push('/missions/');
      notifySuccess('La mission est mise à jour');
    } catch (error: any) {
      notifyError(error.response.data.message);
    }
  };

  const getMissionById = () => {
    const catalog = reviewStore.state.catalog;
    const data = catalog.filter(data => data.id === params.id);
    const [mission] = data;
    return mission;
  };

  useEffect(() => {
    const mission = getMissionById();
    setValues(mission);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="update-mission-page">
        <div className="buttonSwitch">
          <Link to="/missions">
            <img
              id="goBack"
              src="/goBack.png"
              alt="go back"
              className={'back-button-mission'}
            />
          </Link>
        </div>
        <div>
          <MissionForm
            type="update"
            title={'Modifier une mission'}
            values={values}
            setValues={setValues}
            handleClick={handleSubmit}
          />
        </div>
      </div>
    </>
  );
};
export default UpdateMissions;
