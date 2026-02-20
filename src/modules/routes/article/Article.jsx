import { useLoaderData, useParams } from 'react-router';

import getUserCommentsOnArticle from '../../utilities/getUserCommentsOnArticle';

import useScrollToTop from '../../utilities/hooks/useScrollToTop';
import { formatWithNamedMonth } from '../../utilities/formatDate';

import ArticleMain from './ArticleMain';

import ArticleHeader from './ArticleHeader';

import ArticleContent from './ArticleContent';
import NoArticlesNotice from '../root/NoArticlesNotice';

import CommentSection from './CommentSection';
import ArticleComments from './ArticleComments';
import CommentInput from './CommentInput';
import CommentLoginNotice from './CommentLoginNotice';

import AllArticlesFooter from '../allArticles/AllArticlesFooter';

export default function Article() {
    useScrollToTop();

    const response = useLoaderData();
    const params = useParams();

    const article = response?.article !== undefined ? response.article : null;
    const authorName =
        response?.authorName !== undefined ? response.authorName : null;

    const comments = response?.comments !== undefined ? response.comments : [];

    const user = response?.user?.username !== undefined ? response.user : null;

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

    const currentUserComments =
        user !== null ? getUserCommentsOnArticle(user.userId, comments) : {};

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
            <CommentSection>
                <ArticleComments
                    comments={comments}
                    currentUserComments={currentUserComments}
                />
                {user !== null ? (
                    <CommentInput articleId={params.articleId} />
                ) : (
                    <CommentLoginNotice articleId={params.articleId} />
                )}
            </CommentSection>
            <AllArticlesFooter />
        </ArticleMain>
    );
}
