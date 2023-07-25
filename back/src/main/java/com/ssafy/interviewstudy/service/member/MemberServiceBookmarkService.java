package com.ssafy.interviewstudy.service.member;

import com.ssafy.interviewstudy.repository.member.MemberRepository;
import com.ssafy.interviewstudy.repository.member.MemberStudyBookmarkRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class MemberServiceBookmarkService {
    private final MemberRepository memberRepository;
    private final MemberStudyBookmarkRepository memberStudyBookmarkRepository;

    @Autowired
    public MemberServiceBookmarkService(MemberRepository memberRepository, MemberStudyBookmarkRepository memberStudyBookmarkRepository) {
        this.memberRepository = memberRepository;
        this.memberStudyBookmarkRepository = memberStudyBookmarkRepository;
    }

}
