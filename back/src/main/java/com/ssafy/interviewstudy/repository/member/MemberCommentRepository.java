package com.ssafy.interviewstudy.repository.member;

import com.ssafy.interviewstudy.domain.board.ArticleComment;
import com.ssafy.interviewstudy.domain.board.Board;
import io.lettuce.core.dynamic.annotation.Param;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

//public interface MemberCommentRepository extends JpaRepository<Object, Long> {
//
//    @Query("select a from Board a inner join a.comments c where c.author.id = :id ")
//    public List<Board> getCommentedArticleByMemberId(@Param("id")Integer memberId);
//}
