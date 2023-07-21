package com.ssafy.interviewstudy.domain.conference;

import com.ssafy.interviewstudy.domain.study.Study;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor
@Table(name = "conference_room")
public class ConferenceRoom {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="conference_room_id")
    private Integer id;


    @JoinColumn(name = "study_id", nullable = false)
    @OneToOne(fetch = FetchType.LAZY)
    private Study study;

    @Column(nullable = false)
    @CreatedDate
    private LocalDateTime createdAt;

    @OneToMany(mappedBy = "conferenceRoom", cascade = CascadeType.REMOVE)
    private List<ConferenceAttendee> conferenceAttendeeList = new ArrayList<>();
}
