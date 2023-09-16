import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';
import cls from './CommentList.module.scss';

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList: FC<CommentListProps> = memo((props) => {
  const { className, isLoading, comments } = props;
  const { t } = useTranslation('comments');
  return (
    <div className={classNames(cls.CommentList, {}, [className])}>
      {comments?.length
        ? comments.map((comment, index) => (
          <CommentCard
            key={index}
            isLoading={isLoading}
            className={cls.comment}
            comment={comment}
          />
        ))
        : <Text text={t('no comments')} />
      }
    </div>
  );
});