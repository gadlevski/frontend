import { getProfileData, getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { getUserAuthData } from 'entities/User';
import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { HStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text/Text';
// import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = (props) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const { t } = useTranslation('profile');
  const userData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const canEdit = userData?.id === profileData?.id;

  const readonly = useSelector(getProfileReadonly);

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <HStack max justify="between" className={classNames('', {}, [className])}>
      <Text title={t('profile')} />
      {canEdit && (
        <div>
          {readonly
            ? (
              <Button
                theme={ThemeButton.OUTLINE}
                onClick={onEdit}
              >
                {t('edit')}
              </Button>
            )
            : (
              <HStack gap="8">
                <Button
                  theme={ThemeButton.OUTLINE_RED}
                  onClick={onCancelEdit}
                >
                  {t('cancel')}
                </Button>
                <Button
                  theme={ThemeButton.OUTLINE}
                  onClick={onSave}
                >
                  {t('save')}
                </Button>
              </HStack>
            )}
        </div>
      )}
    </HStack>
  );
};