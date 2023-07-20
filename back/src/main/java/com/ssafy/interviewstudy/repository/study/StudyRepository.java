package com.ssafy.interviewstudy.repository.study;

import com.ssafy.interviewstudy.domain.study.Study;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface StudyRepository extends JpaRepository<Study, Integer>, StudyRepositoryCustom {

    @Query("select distinct s from Study s left join fetch s.studyTags st left join fetch st.tag t where s.isRecruit = true and s.isDelete = false")
    //스터디 탭을 클릭했을 시 모집중인 전체 스터디 조회(검색 조건 붙여야함)
    public List<Study> findStudiesByRecruit();

}
