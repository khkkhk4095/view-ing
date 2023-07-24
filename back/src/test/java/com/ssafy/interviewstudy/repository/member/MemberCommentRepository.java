package com.ssafy.interviewstudy.repository.member;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest
@Transactional
public class MemberCommentRepository {

    @Autowired
    MemberRepository memberRepository;

}
