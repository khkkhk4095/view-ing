package com.ssafy.interviewstudy.domain.board;

import com.ssafy.interviewstudy.domain.study.Study;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@Entity
@NoArgsConstructor
@DiscriminatorValue("study_board")
@PrimaryKeyJoinColumn(name = "article_id")
public class StudyBoard extends Board{
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "study_id")
    private Study study;
}
