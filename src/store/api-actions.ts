import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { Offer } from '../types/offer';
import { ApiRoute, AuthorizationStatus, AppRoute } from '../const';
import { saveToken, dropToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import { UserLogin } from '../types/user';
import { Review } from '../types/review';
import { Comments } from '../types/comments';
import {
  loadOffers,
  loadOffer,
  getOffers,
  requireAuthorization,
  setOffersIsLoading,
  redirectToRoute,
  setUser,
  setOfferIsLoading,
  setOfferIsNotFound,
  loadNearOffers,
  setNearOffersIsLoading,
  setNearOffersIsNotFound,
  addReviews,
} from './action';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setOffersIsLoading(true));

    const { data } = await api.get<Offer[]>(ApiRoute.Offers);
    dispatch(loadOffers(data));
    dispatch(getOffers());
    dispatch(setOffersIsLoading(false));
  },
);

export const fetchOfferAction = createAsyncThunk<void, number | string | undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'data/fetchOffer',
    async (_arg, { dispatch, extra: api }) => {
      dispatch(setOfferIsLoading(true));
      dispatch(setOfferIsNotFound(false));
      const id = _arg;
      try {
        const { data } = await api.get<Offer>(`${ApiRoute.Offers}/${id}`);
        if (data) {
          dispatch(loadOffer(data));
        }
      } catch {
        dispatch(setOfferIsNotFound(true));
      } finally {
        dispatch(setOfferIsLoading(false));
      }
    },
  );

export const fetchNearOffersAction = createAsyncThunk<void, number | string | undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'fetchNearPlacesAction', async (_arg, { dispatch, extra: api }) => {
      const id = _arg;

      dispatch(setNearOffersIsLoading(true));
      dispatch(setNearOffersIsNotFound(false));

      try {
        const {data} = await api.get<Offer[]>(
          `${ApiRoute.Offers}/${id}/nearby`
        );

        if (data) {
          dispatch(loadNearOffers(data));
        }
      } catch {
        dispatch(setNearOffersIsNotFound(true));
      } finally {
        dispatch(setNearOffersIsLoading(false));
      }
    });

export const checkAuthAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.get(ApiRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const {data} = await api.post<UserLogin>(ApiRoute.Login, {email, password});
    const {token} = data;

    saveToken(token);
    dispatch(setUser(data));
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const fetchReviewsAction = createAsyncThunk<void, number | string | undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReview',
  async (_arg, { dispatch, extra: api }) => {
    const id = _arg;
    const {data} = await api.get<Review[]>(`${ApiRoute.Comments}/${id}`);

    dispatch(addReviews(data));
  });

export const submitCommentAction = createAsyncThunk<void, Comments, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'submitComment',
  async ({ id, comment, rating }, { dispatch, extra: api }) => {
    await api.post<Comments>(`${ApiRoute.Comments}${id}`, {
      comment: comment,
      rating: rating,
    });

    dispatch(fetchReviewsAction(id));
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(ApiRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    dispatch(redirectToRoute(AppRoute.Main));
  },
);
