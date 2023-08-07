package com.ssafy.interviewstudy.repository.board;

import com.ssafy.interviewstudy.domain.board.ArticleComment;
import com.ssafy.interviewstudy.domain.board.Board;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ArticleCommentRepository extends JpaRepository<ArticleComment, Integer> {

    @Query("select distinct c from ArticleComment c join fetch c.likes")
    List<ArticleComment> findByLikes();

    @Query("select DISTINCT c from ArticleComment c join fetch c.author ca " +
            "left join c.replies cr left join cr.author cra " +
            "where c.comment is null and c.article = :article " +
            "order by c.createdAt")
    List<ArticleComment> findAllByArticle(Board article);

    // 글마다 댓글 수 count
    Integer countByArticle(Board article);

    // 대댓글 수 count
    @Query("select count(c) from ArticleComment c where c.comment.id = :commentId and c.isDelete = false")
    Integer countByComment(Integer commentId);
}
