package com.ssafy.interviewstudy.service.message;

import com.ssafy.interviewstudy.domain.message.Message;
import com.ssafy.interviewstudy.dto.message.MessageListResponse;
import com.ssafy.interviewstudy.repository.message.MessageRepository;
import com.ssafy.interviewstudy.dto.message.MessageDetailResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class MessageService {
    private final MessageRepository messageRepository;

    @Autowired
    public MessageService(MessageRepository messageRepository) {
        this.messageRepository = messageRepository;
    }

    @Transactional
    public MessageDetailResponse getMessageDetail(Integer messageId) {
        Message message = messageRepository.findMessageById(messageId);
        return MessageDetailResponse.fromEntity(message);
    }

    @Transactional
    public MessageListResponse getSentMessages(Integer authorId) {
        List<Message> messageList = messageRepository.findMessagesByAuthorId(authorId);
        return MessageListResponse.fromEntityList(messageList);
    }

    @Transactional
    public MessageListResponse getReceivedMessages(Integer receiverId) {
        List<Message> messageList = messageRepository.findMessagesByReceiverId(receiverId);
        return MessageListResponse.fromEntityList(messageList);
    }
}