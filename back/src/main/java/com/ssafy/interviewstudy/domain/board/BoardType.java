package com.ssafy.interviewstudy.domain.board;

public enum BoardType {

    qna,
    review,
    general;


    @Override
    public String toString() {
        return name();
    }
}
