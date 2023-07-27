package com.ssafy.interviewstudy.repository.notification;

import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.util.List;

public interface EmitterRepository {

    public void save(String id, SseEmitter sseEmitter);

    public void deleteSseEmitterById(String id);

    public List<SseEmitter> getEmittersByMemberId(Integer memberId);

}
