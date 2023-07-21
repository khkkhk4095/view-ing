package com.ssafy.interviewstudy.domain.board;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@Entity
@NoArgsConstructor
@DiscriminatorValue("free_board")
@PrimaryKeyJoinColumn(name = "article_id")
public class FreeBoard extends Board {
}
