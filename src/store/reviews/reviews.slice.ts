import { createSlice } from '@reduxjs/toolkit';
import { TitleSpace } from '../../const';
import { ReviewsStatus } from '../../types/state';
import { fetchReviewsAction, submitCommentAction } from '../api-actions';

const initialState: ReviewsStatus = {
  reviews: [],
  reviewsIsLoading: false,
  reviewsIsNotFound: false
};

export const reviews = createSlice({
  name: TitleSpace.Reviews,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsAction.pending, (state) => {
        state.reviewsIsLoading = true;
        state.reviewsIsNotFound = false;
      })

      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        const reviewsData = action.payload;

        if (reviewsData.length > 0) {
          state.reviews = reviewsData;
        }

        state.reviewsIsLoading = false;
      })

      .addCase(fetchReviewsAction.rejected, (state) => {
        state.reviewsIsLoading = false;
        state.reviewsIsNotFound = true;
      })

      .addCase(submitCommentAction.fulfilled, (state, action) => {
        const newReview = action.payload;

        state.reviews.push(newReview);
      });
  },
});
