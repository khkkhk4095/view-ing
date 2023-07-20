package com.ssafy.interviewstudy.repository.study;

import com.ssafy.interviewstudy.domain.study.StudyRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface StudyRequestRepository extends JpaRepository<StudyRequest, Integer> {

    //study_id 로 신청 조회
    @Query("select sr from StudyRequest sr where sr.study.id = :study_id")
    public List<StudyRequest> findStudyRequestsByStudyId(@Param("study_id") Integer studyId);
}
