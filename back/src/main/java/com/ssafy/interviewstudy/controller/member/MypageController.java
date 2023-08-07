package com.ssafy.interviewstudy.controller.member;

import com.ssafy.interviewstudy.annotation.Authority;
import com.ssafy.interviewstudy.annotation.AuthorityType;
import com.ssafy.interviewstudy.annotation.JWTRequired;
import com.ssafy.interviewstudy.domain.board.BoardType;
import com.ssafy.interviewstudy.dto.board.BoardRequest;
import com.ssafy.interviewstudy.dto.board.BoardResponse;
import com.ssafy.interviewstudy.service.member.MemberArticleLikeService;
import com.ssafy.interviewstudy.service.member.MemberCommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MypageController {

    private MemberCommentService memberCommentService;

    private MemberArticleLikeService memberArticleLikeService;

    @Autowired
    public MypageController(MemberCommentService memberCommentService, MemberArticleLikeService memberArticleLikeService) {
        this.memberCommentService = memberCommentService;
        this.memberArticleLikeService = memberArticleLikeService;
    }

    @JWTRequired(required = true)
    @Authority(authorityType = AuthorityType.Member)
    @GetMapping(value="/members/{memberId}/article",params = "searchType=favor")
    public ResponseEntity<?> getFavorArticleList(@RequestParam("board")BoardType boardType, @PathVariable("memberId") Integer memberId){
        BoardRequest boardRequest = new BoardRequest();
        boardRequest.setMemberId(memberId);
        List<BoardResponse> boardResponseList = memberArticleLikeService.getLikedArticleByMemberId(boardRequest,boardType);
        return ResponseEntity.ok().body(boardResponseList);

    }


    @JWTRequired(required = true)
    @Authority(authorityType = AuthorityType.Member)
    @GetMapping(value="/members/{memberId}/article",params = "searchType=comment")
    public ResponseEntity<?> getCommentedArticleList(@RequestParam("board")BoardType boardType, @PathVariable("memberId") Integer memberId){
        BoardRequest boardRequest = new BoardRequest();
        boardRequest.setMemberId(memberId);
        List<BoardResponse> boardResponseList = memberCommentService.getCommentedArticle(boardRequest,boardType);
        return ResponseEntity.ok().body(boardResponseList);

    }
}