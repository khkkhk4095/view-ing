package com.ssafy.interviewstudy.repository.message;

import com.ssafy.interviewstudy.domain.message.Message;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MessageRepository extends JpaRepository<Message, Integer> {

    List<Message> findMessagesByAuthorId(Integer authorId);
    
    List<Message> findMessagesByReceiverId(Integer receiverId);
}
