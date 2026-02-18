import { useLoaderData } from 'react-router';

import useScrollToTop from '../../utilities/hooks/useScrollToTop';
import { formatWithNamedMonth } from '../../utilities/formatDate';

import ArticleMain from './ArticleMain';
import ArticleHeader from './ArticleHeader';
import ArticleContent from './ArticleContent';
import NoArticlesNotice from '../root/NoArticlesNotice';
import AllArticlesFooter from '../allArticles/AllArticlesFooter';

export default function Article() {
    useScrollToTop();

    const response = useLoaderData();

    const article = response?.article !== undefined ? response.article : null;
    const authorName =
        response?.authorName !== undefined ? response.authorName : null;

    if (article === null || authorName === null) {
        return (
            <>
                <NoArticlesNotice
                    header={'Article Unavailable'}
                    content={
                        // eslint-disable-next-line quotes
                        "We couldn't load the requested article. Try refreshing or try again later."
                    }
                />
                <AllArticlesFooter />
            </>
        );
    }

    return (
        <ArticleMain>
            <ArticleHeader
                title={article.title}
                description={article.description}
                authorName={authorName}
                createdAt={formatWithNamedMonth(article.createdAt)}
            />
            <ArticleContent
                content={article.content}
                lastModification={formatWithNamedMonth(
                    article.lastModification
                )}
            />
            <AllArticlesFooter />
        </ArticleMain>
    );
}
