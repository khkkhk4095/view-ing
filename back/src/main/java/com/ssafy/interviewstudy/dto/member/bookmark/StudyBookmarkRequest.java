package com.ssafy.interviewstudy.dto.member.bookmark;

import lombok.Data;

import javax.validation.constraints.NotNull;

//북마크 생성
@Data
public class CreateStudyBookmarkRequest {
    //북마크한 유저 아이디
    @NotNull
    private Integer memberId;

    //북마크한 스터디 아이디
    @NotNull
    private Integer studyId;
}
