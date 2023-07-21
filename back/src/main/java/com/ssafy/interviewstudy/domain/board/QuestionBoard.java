package com.ssafy.interviewstudy.domain.board;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@Entity
@NoArgsConstructor
@DiscriminatorValue("question_board")
@PrimaryKeyJoinColumn(name = "article_id")
public class QuestionBoard extends Board{
}
