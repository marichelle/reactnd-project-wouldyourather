import {
  ADD_ANSWER,
  ADD_QUESTION,
  RECEIVE_QUESTIONS,
} from '../actions/questions';

export default function questions(state = {}, action) {
  switch (action.type) {
    case ADD_ANSWER:
      const { user, qid, answer } = action;

      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat([user]),
          },
        },
      };

    case ADD_QUESTION:
      const { question } = action;

      return {
        ...state,
        [question.id]: question,
      };

    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };

    default:
      return state;
  }
}
