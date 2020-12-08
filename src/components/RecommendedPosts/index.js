import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

const resolveTypePost = (next, previous) => {
  if (!next) return "last-post"
  if (!previous) return "first-post"
  return ""
}

const RecommendedPosts = ({ next, previous }) => (
  <S.RecommendedWrapper className={`${resolveTypePost(next, previous)}`}>
    {previous && (
      <S.RecommendedLink
        cover
        direction="left"
        bg="#16202c"
        duration={0.6}
        to={previous.fields.slug}
        className="previous"
      >
        {previous.frontmatter.title}
      </S.RecommendedLink>
    )}
    {next && (
      <S.RecommendedLink
        cover
        direction="right"
        bg="#16202c"
        duration={0.6}
        to={next.fields.slug}
        className="next"
      >
        {next.frontmatter.title}
      </S.RecommendedLink>
    )}
  </S.RecommendedWrapper>
)

RecommendedPosts.propTypes = {
  next: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }),
  }),
  previous: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }),
  }),
}

export default RecommendedPosts
