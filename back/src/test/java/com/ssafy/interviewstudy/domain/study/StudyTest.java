package com.ssafy.interviewstudy.domain.study;

import com.ssafy.interviewstudy.repository.study.StudyMemberRepository;
import com.ssafy.interviewstudy.repository.study.StudyRepository;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@Transactional
@Rollback(false)

class StudyTest {
    @PersistenceContext
    EntityManager em;
    @Autowired
    StudyRepository studyRepository;

    @Autowired
    StudyMemberRepository studyMemberRepository;

    @Test
    public void StudyGetTest(){
        Study study = new Study("title", "description", "job", 6);
        studyRepository.save(study);
        em.flush();
        em.clear();

        assertThat(studyRepository.findById(1).get().getTitle()).isEqualTo("title");
    }

    @Test
    public void StudyFindByRecruitTest(){
        Study study1 = new Study("title", "description", "job", 6);
        Study study2 = new Study("title", "description", "job", 6);
        Study study3 = new Study("title", "description", "job", 6);
        study1.setRecruit(true);
        study2.setRecruit(true);
        studyRepository.save(study1);
        studyRepository.save(study2);
        studyRepository.save(study3);

        StudyTag st = new StudyTag();
        em.persist(st);
        StudyTagType stt = new StudyTagType();
        em.persist(stt);
        stt.setTagName("1111");

        st.setTag(stt);

        StudyTag st2 = new StudyTag();
        em.persist(st2);
        StudyTagType stt2 = new StudyTagType();
        em.persist(stt2);
        stt2.setTagName("2222");

        st2.setTag(stt);

        st.setStudy(study1);
        st2.setStudy(study1);
        em.flush();
        em.clear();


        List<Study> studiesByRecruit = studyRepository.findStudiesByRecruit();
        System.out.println(studiesByRecruit.get(0).getStudyTags().get(0).getTag().getTagName());
        assertThat(studyRepository.findStudiesByRecruit().size()).isEqualTo(2);
    }

    @Test
    public void StudyRemoveTest(){
        Study study1 = new Study("title", "description", "job", 6);
        Study study2 = new Study("title", "description", "job", 6);
        Study study3 = new Study("title", "description", "job", 6);

        studyRepository.save(study1);
        studyRepository.save(study2);
        studyRepository.save(study3);
        em.flush();
        em.clear();

        em.remove(studyRepository.findById(1).get());

        assertThat(studyRepository.findAll().size()).isEqualTo(2);
    }

    @Test
    public void StudyUpdateTest(){
        Study study1 = new Study("title", "description", "job", 6);

        studyRepository.save(study1);

        study1.setTitle("title2");

        em.flush();
        em.clear();

        assertThat(studyRepository.findById(1).get().getTitle()).isEqualTo("title2");
    }

    @Test
    public void StudyMemberTest(){
        Study study1 = new Study("title", "description", "job", 6);

        studyRepository.save(study1);

        Member member = new Member();

        em.persist(member);

        StudyMember sm = new StudyMember();
        sm.setMember(member);
        sm.setStudy(study1);
        em.persist(sm);
        em.flush();
        em.clear();

        studyMemberRepository.deleteStudyMember(1, 1);
    }

    @Test
    public void updateRequest(){
        Study study1 = new Study("title1", "description", "job", 6);
        Study study2 = new Study("title2", "description", "job", 5);

        studyRepository.save(study1);
        studyRepository.save(study2);

        Member member1 = new Member();
        member1.setNickname("111");
        em.persist(member1);
        Member member2 = new Member();
        member2.setNickname("222");
        em.persist(member2);

        StudyRequest sr1 = new StudyRequest();
        sr1.setStudy(study1);
        sr1.setApplicant(member1);
        em.persist(sr1);
        StudyRequest sr2 = new StudyRequest();
        sr2.setStudy(study1);
        sr2.setApplicant(member2);
        em.persist(sr2);
        em.flush();
        em.clear();

        StudyRequest sr = em.find(StudyRequest.class, 1);
        Study find = studyRepository.findById(1).get();
        List<StudyRequest> studyRequests = find.getStudyRequests();
        StudyRequest srfind = studyRequests.get(0);

        System.out.println(sr == srfind);

    }
}