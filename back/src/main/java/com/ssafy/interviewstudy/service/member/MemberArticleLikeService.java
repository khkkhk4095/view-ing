package com.ssafy.interviewstudy.service.member;

import com.ssafy.interviewstudy.repository.member.MemberArticleLikeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MemberArticleLikeService {

    private MemberArticleLikeRepository memberArticleLikeRepository;

    @Autowired
    public MemberArticleLikeService(MemberArticleLikeRepository memberArticleLikeRepository) {
        this.memberArticleLikeRepository = memberArticleLikeRepository;
    }



}
