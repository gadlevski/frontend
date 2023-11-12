// prettier-ignore
import { getUserAuthData } from '@/entities/User';
import ArticleIcon from '@/shared/assets/icons/article.svg';
import MainIcon from '@/shared/assets/icons/main.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import {
  getRouteArticles,
  getRouteMain,
  getRouteProfile,
} from '@/shared/const/router';
import { createSelector } from '@reduxjs/toolkit';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItemsList: SidebarItemType[] = [
    {
      path: getRouteMain(),
      Icon: MainIcon,
      text: 'main',
    },
    {
      path: getRouteArticles(),
      Icon: ArticleIcon,
      text: 'articles',
    },
  ];

  if (userData) {
    sidebarItemsList.push({
      path: getRouteProfile(userData.id),
      Icon: ProfileIcon,
      text: 'profile',
      authOnly: true,
    });
  }

  return sidebarItemsList;
});
