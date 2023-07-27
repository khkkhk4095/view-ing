package com.ssafy.interviewstudy.dto.board;

import com.ssafy.interviewstudy.domain.board.ArticleFile;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class BoardRequest {

    private Integer memberId;

    private String title;
    private String content;

    private List<ArticleFile> files;

}
