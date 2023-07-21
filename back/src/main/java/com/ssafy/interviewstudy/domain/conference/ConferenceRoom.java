package com.ssafy.interviewstudy.domain.conference;

import com.ssafy.interviewstudy.domain.study.Study;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@Table(name = "conference_room")
public class ConferenceRoom {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Integer conferenceRoom_id;


    @JoinColumn(name = "study_id", nullable = false)
    @OneToOne(fetch = FetchType.LAZY)
    private Study study;

    @Column(nullable = false)
    LocalDateTime createdAt;

    @Column(nullable = true)
    LocalDateTime closedAt;

    @OneToMany(mappedBy = "conferenceRoom", cascade = CascadeType.ALL)
    List<ConferenceAttendee> conferenceAttendeeList = new ArrayList<>();
}
