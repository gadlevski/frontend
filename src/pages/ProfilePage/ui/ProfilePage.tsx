import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileCard, ValidateProfileError, fetchProfileData, getProfileError, getProfileForm, getProfileIsLoading, getProfileReadonly, getProfileValidateErrors, profileActions, profileReducer } from 'entities/Profile';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { Page } from 'shared/ui/Page/Page';
import { Text, ThemeText } from 'shared/ui/Text/Text';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = () => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();

  const formData = useSelector(getProfileForm);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);
  const { id } = useParams<{ id: string; }>();

  const validateErrorTranslates = {
    [ValidateProfileError.SERVER_ERROR]: t('server error'),
    [ValidateProfileError.INCORRECT_COUNTRY]: t('incorrect country'),
    [ValidateProfileError.NO_DATA]: t('no data'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t('incorrect user data'),
    [ValidateProfileError.INCORRECT_AGE]: t('incorrect age'),
  };

  const onChangeFirstname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ first: value || '' }));
  }, [dispatch]);

  const onChangeLastname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ lastname: value || '' }));
  }, [dispatch]);

  const onChangeAge = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
  }, [dispatch]);

  const onChangeCity = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ city: value || '' }));
  }, [dispatch]);

  const onChangeUsername = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ username: value || '' }));
  }, [dispatch]);

  const onChangeAvatar = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ avatar: value || '' }));
  }, [dispatch]);

  const onChangeCurrency = useCallback((currency: Currency) => {
    dispatch(profileActions.updateProfile({ currency: currency }));
  }, [dispatch]);

  const onChangeCountry = useCallback((country: Country) => {
    dispatch(profileActions.updateProfile({ country: country }));
  }, [dispatch]);

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  });

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page>
        {t('title')}
        <ProfilePageHeader />
        {validateErrors?.length && validateErrors.map(err => (
          <Text theme={ThemeText.ERROR} text={validateErrorTranslates[err]} key={err} />
        ))}
        <ProfileCard
          data={formData}
          isLoading={isLoading}
          error={error}
          readonly={readonly}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
        />
      </Page>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
