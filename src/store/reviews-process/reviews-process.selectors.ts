import { State } from '../../types/state';
import { TitleSpace } from '../../const';
import { Review } from '../../types/review';

export const getReviews = (state: State): Review[] => state[TitleSpace.Reviews].reviews;
export const getReviewsIsLoading = (state: State): boolean => state[TitleSpace.Reviews].reviewsIsLoading;
export const getReviewsIsNotFound = (state: State): boolean => state[TitleSpace.Reviews].reviewsIsNotFound;
