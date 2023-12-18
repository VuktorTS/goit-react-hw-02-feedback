import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ option, onLeaveFeedback }) => {
  return (
    <ul>
      {option.map(item => {
        return (
          <li key={item}>
            <button
              className={css.btn}
              type="button"
              name={item}
              onClick={onLeaveFeedback}
            >
              {item}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
