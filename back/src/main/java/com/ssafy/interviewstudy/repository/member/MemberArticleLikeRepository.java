package com.ssafy.interviewstudy.repository.member;

import com.ssafy.interviewstudy.domain.board.ArticleLike;
import com.ssafy.interviewstudy.domain.board.Board;
import io.lettuce.core.dynamic.annotation.Param;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

//public interface MemberArticleLikeRepository extends JpaRepository<Object,Long> {
//
//    //멤버 ID(PK)로 좋아요한 게시글 가져오기
//    @Query("select a from Board a inner join a.likes l where l.member.id = :id ")
//    public List<Board> getArticleByMemberId(@Param("id")Integer memberId);
//}
