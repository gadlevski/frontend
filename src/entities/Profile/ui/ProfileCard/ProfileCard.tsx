import { Country, CountrySelect } from '@/entities/Country';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { FC, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Input } from '@/shared/ui/Input/Input';
import { Loader } from '@/shared/ui/Loader/Loader';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text, TextAlign, ThemeText } from '@/shared/ui/Text/Text';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  children?: ReactNode;
  data?: Profile;
  error?: string;
  isLoading?: boolean;
  readonly?: boolean;
  onChangeFirstname?: (value: string) => void;
  onChangeLastname?: (value: string) => void;
  onChangeCity?: (value: string) => void;
  onChangeAge?: (value: string) => void;
  onChangeUsername?: (value: string) => void;
  onChangeAvatar?: (value: string) => void;
  onChangeCurrency?: (currency: Currency) => void;
  onChangeCountry?: (country: Country) => void;
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
  const {
    className,
    data,
    error,
    isLoading,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeCity,
    onChangeAge,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
  } = props;
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <HStack justify="center" max className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}>
        <Loader />
      </HStack >
    );
  }

  if (error) {
    return (
      <HStack justify="center" max className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          theme={ThemeText.ERROR}
          title={t('errorTitle')}
          text={t('errorText')}
          align={TextAlign.CENTER}
        />
      </HStack >
    );
  }

  const mods: Mods = {
    [cls.editing]: !readonly,
  };

  return (
    <VStack gap="8" max className={classNames(cls.ProfileCard, mods, [className])}>
      {data?.avatar &&
        <HStack justify="center" max className={cls.avatarWrapper}>
          <Avatar src={data?.avatar} />
        </HStack>
      }
      <Input
        className={cls.input}
        value={data?.first}
        placeholder={t('name')}
        onChange={onChangeFirstname}
        readonly={readonly}
        data-testid="ProfileCard.firstname"
      />
      <Input
        className={cls.input}
        value={data?.lastname}
        placeholder={t('lastname')}
        onChange={onChangeLastname}
        readonly={readonly}
        data-testid="ProfileCard.lastname"
      />
      <Input
        className={cls.input}
        value={data?.age}
        placeholder={t('age')}
        onChange={onChangeAge}
        readonly={readonly}
      />
      <Input
        className={cls.input}
        value={data?.city}
        placeholder={t('city')}
        onChange={onChangeCity}
        readonly={readonly}
      />
      <Input
        className={cls.input}
        value={data?.username}
        placeholder={t('username')}
        onChange={onChangeUsername}
        readonly={readonly}
      />
      <Input
        className={cls.input}
        value={data?.avatar}
        placeholder={t('avatar')}
        onChange={onChangeAvatar}
        readonly={readonly}
      />
      <CurrencySelect
        className={cls.input}
        value={data?.currency}
        onChange={onChangeCurrency}
        readonly={readonly}
      />
      <CountrySelect
        className={cls.input}
        value={data?.country}
        onChange={onChangeCountry}
        readonly={readonly}
      />
    </VStack>
  );
};