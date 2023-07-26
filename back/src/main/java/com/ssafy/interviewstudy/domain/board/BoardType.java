package com.ssafy.interviewstudy.domain.board;

public enum BoardType {

    free_board,
    question_board,
    interview_review_board;


    @Override
    public String toString() {
        return name();
    }
}
