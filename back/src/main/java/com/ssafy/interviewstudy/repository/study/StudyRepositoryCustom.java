package com.ssafy.interviewstudy.repository.study;

import com.ssafy.interviewstudy.domain.study.Study;

import java.util.List;

public interface StudyRepositoryCustom {
    List<Study> findStudiesBySearch();
}
