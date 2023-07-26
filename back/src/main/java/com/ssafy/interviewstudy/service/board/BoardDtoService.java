package com.ssafy.interviewstudy.service.board;

import com.ssafy.interviewstudy.domain.board.Board;
import com.ssafy.interviewstudy.domain.board.StudyBoard;
import com.ssafy.interviewstudy.domain.member.Member;
import com.ssafy.interviewstudy.dto.board.*;
import com.ssafy.interviewstudy.repository.board.ArticleCommentRepository;
import com.ssafy.interviewstudy.repository.board.ArticleLikeRepository;
import com.ssafy.interviewstudy.repository.board.BoardRepository;
import com.ssafy.interviewstudy.repository.member.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BoardDtoService {
    private ArticleCommentRepository commentRepository;
    private ArticleLikeRepository articleLikeRepository;
    private MemberRepository memberRepository;

    @Autowired
    public BoardDtoService(ArticleCommentRepository commentRepository, ArticleLikeRepository articleLikeRepository, MemberRepository memberRepository) {
        this.commentRepository = commentRepository;
        this.articleLikeRepository = articleLikeRepository;
        this.memberRepository = memberRepository;
    }

    public Board toEntity(BoardRequest boardRequest) {
        Member author = memberRepository.findMemberById(boardRequest.getMemberId());

        Board article = new Board();
        article.setTitle(boardRequest.getTitle());
        article.setContent(boardRequest.getContent());
        article.setAuthor(author);

        return article;
    }

    public BoardResponse fromEntityWithoutContent(Board article) {
        BoardResponse boardResponse = new BoardResponse();

        boardResponse.setId(article.getId());
        boardResponse.setAuthor(new Author(article.getAuthor()));
        boardResponse.setTitle(article.getTitle());
        boardResponse.setViewCount(article.getViewCount());
        boardResponse.setCommentCount(commentRepository.countByArticle(article));
        boardResponse.setLikeCount(articleLikeRepository.countByArticle(article));

        return boardResponse;
    }

    public BoardResponse fromEntity(Board article) {
        BoardResponse boardResponse = fromEntityWithoutContent(article);
        boardResponse.setContent(article.getContent());
        boardResponse.setCreatedAt(article.getCreatedAt());
        boardResponse.setUpdatedAt(article.getUpdatedAt());
        boardResponse.setArticleFiles(article.getFiles());

        return boardResponse;
    }

    public StudyBoard toEntity(StudyBoardRequest studyBoardRequest) {
        Member author = memberRepository.findMemberById(studyBoardRequest.getMemberId());

        StudyBoard article = new StudyBoard();
        article.setTitle(studyBoardRequest.getTitle());
        article.setContent(studyBoardRequest.getContent());
        article.setAuthor(author);

        return article;
    }

    public StudyBoardResponse fromEntityWithoutContent(StudyBoard article) {
        StudyBoardResponse studyBoardResponse = new StudyBoardResponse();

        studyBoardResponse.setId(article.getId());
        studyBoardResponse.setAuthor(new Author(article.getAuthor()));
        studyBoardResponse.setTitle(article.getTitle());
        studyBoardResponse.setViewCount(article.getViewCount());
        studyBoardResponse.setCommentCount(commentRepository.countByArticle(article));
        studyBoardResponse.setLikeCount(articleLikeRepository.countByArticle(article));

        return studyBoardResponse;
    }

    public StudyBoardResponse fromEntity(StudyBoard article) {
        StudyBoardResponse boardResponse = fromEntityWithoutContent(article);
        boardResponse.setContent(article.getContent());
        boardResponse.setCreatedAt(article.getCreatedAt());
        boardResponse.setUpdatedAt(article.getUpdatedAt());
        boardResponse.setArticleFiles(article.getFiles());

        return boardResponse;
    }

}
