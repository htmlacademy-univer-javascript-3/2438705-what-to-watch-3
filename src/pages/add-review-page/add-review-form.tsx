import {useState, FormEvent, JSX} from 'react';

type AddReviewFormProps = {
  onAnswer: (rating: number) => void;
};

const numbers: number[] = Array.from({ length: 10 }, (_, i) => i + 1);

export function AddReviewForm({onAnswer}: AddReviewFormProps): JSX.Element {
  const [userAnswers, setUserAnswers] = useState(1);

  return (
    <form
      action="#"
      className="add-review__form"
      onSubmit={(evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        onAnswer(userAnswers);
      }}
    >
      <div className="rating">
        <div className="rating__stars">
          {numbers.map((number) => (
            <>
              <input
                className="rating__input"
                id={`star-${number}`}
                type="radio"
                name="rating"
                value={`${number}`}
                onChange={() => {
                  setUserAnswers(number);
                }}
              />
              <label className="rating__label" htmlFor={`star-${number}`}>
                Rating {number}
              </label>
            </>
          ))}
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text">
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">
            Post
          </button>
        </div>
      </div>
    </form>
  );
}
