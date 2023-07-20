package com.ssafy.interviewstudy.repository.study;

import com.ssafy.interviewstudy.domain.study.StudyCalender;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface StudyCalenderRepository extends JpaRepository<StudyCalender, Integer> {

    //스터디 일정 조회
    @Query("select sc from StudyCalender sc where sc.study.id = :study_id")
    public List<StudyCalender> findStudyCalendersByStudyId(@Param("study_id") Integer studyId);
}
