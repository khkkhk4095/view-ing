package com.ssafy.interviewstudy.repository.study;

import com.ssafy.interviewstudy.domain.study.CareerLevel;
import com.ssafy.interviewstudy.domain.study.Company;
import com.ssafy.interviewstudy.domain.study.Study;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface StudyRepositoryCustom {
    //조건으로 조회
    Page<Study> findStudiesBySearch(Boolean isRecruit, Integer appliedCompany, String appliedJob, CareerLevel careerLevel, Pageable pageable);
}