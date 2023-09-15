import { Article } from './article';

export interface ArtilcleDetailsSchema {
  isLoading: boolean;
  error?: string;
  data?: Article;
}