import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = (props) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const { t } = useTranslation('profile');
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
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Text title={t('profile')} />
      {
        readonly ?
          <Button
            className={cls.editBtn}
            theme={ThemeButton.OUTLINE}
            onClick={onEdit}
          >
            {t('edit')}
          </Button>
          :
          <>
            <Button
              className={cls.editBtn}
              theme={ThemeButton.OUTLINE_RED}
              onClick={onCancelEdit}
            >
              {t('cancel')}
            </Button>
            <Button
              className={cls.saveBtn}
              theme={ThemeButton.OUTLINE}
              onClick={onSave}
            >
              {t('save')}
            </Button>
          </>
      }
    </div>
  );
};