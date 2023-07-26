package com.ssafy.interviewstudy.service.member;

import com.ssafy.interviewstudy.domain.board.ArticleComment;
import com.ssafy.interviewstudy.domain.board.Board;
import com.ssafy.interviewstudy.domain.board.BoardType;
import com.ssafy.interviewstudy.domain.board.FreeBoard;
import com.ssafy.interviewstudy.domain.member.Member;
import com.ssafy.interviewstudy.dto.board.BoardRequest;
import com.ssafy.interviewstudy.dto.board.BoardResponse;
import com.ssafy.interviewstudy.repository.board.ArticleCommentRepository;
import com.ssafy.interviewstudy.repository.board.BoardRepository;
import com.ssafy.interviewstudy.repository.board.FreeBoardRepository;
import com.ssafy.interviewstudy.repository.board.QuestionBoardRepository;
import com.ssafy.interviewstudy.repository.member.MemberRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@SpringBootTest
@Transactional
public class MemberCommentServiceTest {

    @Autowired
    private MemberCommentService memberCommentService;

    @Autowired
    private MemberRepository memberRepository;

    @Autowired
    private BoardRepository boardRepository;

    @Autowired
    private FreeBoardRepository freeBoardRepository;

    @Autowired
    private QuestionBoardRepository questionBoardRepository;

    @Autowired
    private ArticleCommentRepository articleCommentRepository;

    @Test
    @DisplayName("댓글 단 게시글 조회 테스트")
    public void retrieveCommentedArticleTest(){
        //give
        //게시글 작성할 멤버 생성
        Member memberA = Member.builder().email("tkdwo@gmail.com").nickname("ssafy").build();

        //댓글 작성할 멤버 생성
        Member memberB = Member.builder().email("sj_1333@naver.com").nickname("ssafy123").build();

        //게시글 작성
        FreeBoard freeBoardA = new FreeBoard();
        freeBoardA.setTitle("ssafy");
        freeBoardA.setContent("내용내용");
        freeBoardA.setAuthor(memberA);
        freeBoardA.setViewCount(0);
        freeBoardRepository.save(freeBoardA);

        FreeBoard freeBoardB = new FreeBoard();
        freeBoardB.setTitle("ssafy2");
        freeBoardB.setContent("내용내용2");
        freeBoardB.setAuthor(memberA);
        freeBoardB.setViewCount(0);
        freeBoardRepository.save(freeBoardB);

        //댓글 작성
        ArticleComment articleCommentA =
                ArticleComment.builder().author(memberB).content("하하").article(freeBoardA).isDelete(false).build();

        ArticleComment articleCommentB =
                ArticleComment.builder().author(memberB).content("히히").article(freeBoardB).isDelete(false).build();

        articleCommentRepository.save(articleCommentA);
        articleCommentRepository.save(articleCommentB);
        //when
        BoardRequest boardRequest = new BoardRequest();
        boardRequest.setMemberId(memberB.getId());
        List<BoardResponse> boardList = memberCommentService.getCommentedArticle(boardRequest, BoardType.free_board);
        System.out.println(boardList);
    }

}
